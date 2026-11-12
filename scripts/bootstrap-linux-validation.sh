#!/usr/bin/env bash
set -euo pipefail
if [ "$(uname -s)" != Linux ]; then echo "Run this in Ubuntu/WSL." >&2; exit 2; fi
if [ "$#" -ne 1 ] || [ ! -f "$1" ]; then echo "Usage: bash bootstrap-linux-validation.sh /path/to/review-source.tar" >&2; exit 2; fi
for required in curl tar sha256sum awk xz; do command -v "$required" >/dev/null || { echo "Missing Linux tool: $required" >&2; exit 2; }; done
case "$(uname -m)" in x86_64) node_arch=x64 ;; aarch64) node_arch=arm64 ;; *) echo "Unsupported CPU architecture" >&2; exit 2 ;; esac
validation_dir=$(mktemp -d /tmp/nestique-validation.XXXXXXXX)
tool_dir="$validation_dir/tooling"
mkdir -p "$tool_dir/node" "$validation_dir/source"
curl --fail --silent --show-error --location https://nodejs.org/dist/latest-v24.x/SHASUMS256.txt -o "$tool_dir/SHASUMS256.txt"
node_archive=$(awk -v arch="$node_arch" '$2 ~ ("^node-v24\\.[0-9]+\\.[0-9]+-linux-" arch "\\.tar\\.xz$") {print $2}' "$tool_dir/SHASUMS256.txt")
if [ -z "$node_archive" ] || [[ "$node_archive" == *$'\n'* ]]; then echo "Could not select a unique official Node 24 archive" >&2; exit 2; fi
curl --fail --silent --show-error --location "https://nodejs.org/dist/latest-v24.x/$node_archive" -o "$tool_dir/$node_archive"
(cd "$tool_dir" && awk -v file="$node_archive" '$2 == file' SHASUMS256.txt | sha256sum --check --strict)
tar -xJf "$tool_dir/$node_archive" -C "$tool_dir/node" --strip-components=1
export PATH="$tool_dir/node/bin:$tool_dir/pnpm/node_modules/.bin:$PATH"
npm install --prefix "$tool_dir/pnpm" pnpm@10.30.3 --no-audit --no-fund
tar -xf "$1" -C "$validation_dir/source"
cd "$validation_dir/source"
export CI=true APP_ENV=release-test NEXT_PUBLIC_SUPABASE_URL=https://release-test.invalid NEXT_PUBLIC_SUPABASE_ANON_KEY=release-test-placeholder
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
echo "Isolated Linux workspace: $validation_dir/source"
echo "No Cloudflare or GitHub login is required. If browser libraries are missing, install them separately with Linux administrative privileges."
node scripts/validate-linux-local.mjs --skip-install
