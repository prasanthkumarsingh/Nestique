# Release gates and deployment route — 942dc19

Candidate: `942dc19dd266924673fdf12647e8b31ba3593d26`. The isolated review worktree remains unchanged at that commit. Operational notes and the staging acceptance harness live outside it. No application changes or Linux-validation reruns were made for this follow-up.

## Current status

| Gate | Status |
| --- | --- |
| Linux OpenNext packaging, workerd and prepared HTTP/browser tests | **Passed**; retained from the completed WSL run |
| Real staging database persistence / deduplication | **Blocked** — owner confirmed staging still needs setup |
| Real test-email provider delivery and inbox receipt | **Blocked** — no test email setup/inbox configured |
| Production target in source | **Verified from candidate** — Worker `nestique`, intended canonical origin `https://www.nestiquestudio.in`, APP_ENV `production` |
| Staging target in source | **Verified from candidate** — Worker `nestique-staging`, APP_ENV `staging`, no production routes declared |
| Actual account, domain-to-Worker mapping and live bindings | **Unverified** — no Cloudflare login/read token is configured |
| Automatic production / preview triggers and remote workflows | **Unverified** — Cloudflare account access absent; GitHub requests return 401 |
| Candidate's local workflow definition | **Reviewed** — only the exact review-branch push plus manual dispatch; build/test/dry-run only, no deployment step |
| Rollback command syntax | **Verified** against installed Wrangler 4.128.0 help and current Cloudflare documentation |
| Actual rollback version and availability | **Unverified** — active deployment/version IDs and rollback eligibility cannot be retrieved yet |
| Business/project/image approval | **Pending** — see OWNER-APPROVAL.md, including 32 linked portfolio images |
| Analytics collector | **Unconnected**; custom event tests are not collection verification |

The localhost staging harness is prepared and syntax-checked. Its current preflight reports missing settings with **zero network requests**. This is not a real staging test pass. No production credentials were relabelled or used for testing.

## Target and automatic-trigger evidence to obtain

With read-only Cloudflare access, record the actual account ID and confirm the intended production domain and apex redirect are attached to **Worker `nestique`**, not merely mentioned in metadata. Inspect current runtime settings: APP_ENV, public site URL, required secret names, ASSETS and any dashboard-only bindings. Read secret names/configuration status, not secret values.

Inspect **Settings → Builds / Branch control** and the existing Git integration. Record the connected repository, production branch, production build/deploy command, preview model/command and legacy trigger branch filters. Check independent GitHub workflows, deployment hooks and installed-app automation too. Local upstream `origin/master` is not proof of the current account's production branch.

Cloudflare runs the configured deploy command after production-branch builds, and older preview configurations can differ from the newer isolated-preview model. Do not switch preview models or push branches based on assumptions. Retain the review branch exclusion/pause until actual isolation is established. The candidate's no-deploy GitHub workflow cannot disable a separate Cloudflare trigger. [Cloudflare branch controls](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/).

Record these fields before release:

| Required account evidence | Value |
| --- | --- |
| Account ID / approved account | pending |
| Production Worker and domain mapping | pending account confirmation |
| Connected repository / production branch | pending |
| Production and preview deploy commands | pending |
| Independent hooks/workflows checked | pending |
| Current deployment ID | pending |
| Current active Worker version ID(s) and traffic split | pending |
| Selected known-good rollback version UUID | pending |
| Rollback target still available and bindings compatible | pending |

## Rollback procedure: reviewed, not executed

The installed CLI confirms the version argument and configuration flag. Once read access is available, capture the active deployment and its version IDs:

```bash
pnpm exec wrangler deployments list --config wrangler.jsonc --json
pnpm exec wrangler versions list --config wrangler.jsonc --json
```

Select a **known-good previously deployed Worker version UUID** from the actual deployment history. A Git commit SHA, deployment ID and Worker version UUID are different identifiers: do not pass `942dc19` to `wrangler rollback`. Preserve the previous version and relevant asset/config provenance before release.

Only if an authorised production rollout later needs rollback:

```bash
pnpm exec wrangler rollback <RECORDED_KNOWN_GOOD_WORKER_VERSION_UUID> --config wrangler.jsonc
pnpm exec wrangler deployments list --config wrangler.jsonc --json
```

Verify the selected version is now active, then check the previous release's homepage/services/contact behaviour, domain redirects, assets and logs. Prevent automatic Git builds from immediately reintroducing the failed candidate. Leave additive enquiry columns/indexes and saved records in place; do not delete tables or enquiries. Worker rollback does not revert database writes or external account changes. Actual rollback eligibility still needs account verification, especially retained versions/assets and compatible resource bindings. [Cloudflare rollback behaviour and restrictions](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/).

## Simplest deployment route after all gates pass

One controlled manual deployment from a clean Linux export of **exact commit 942dc19** to the existing Worker is the shortest route with the current GitHub 401 problem. It avoids needing a new hosting service or a Git push just to deploy. It still requires approved Cloudflare write credentials, verified account/domain/rollback details, a reviewed migration, staging acceptance, owner approval and explicit production-deployment authorisation. Do not execute it now.

1. Complete localhost real-provider staging tests first. Use only the separate staging project/test email setup.
2. Verify the account target, current active version/rollback UUID and automatic-trigger isolation. Record those details. Apply any reviewed production migration only with separate authorisation and after target confirmation.
3. Create a clean Linux checkout/archive of the pinned candidate and set the real **public** production build variables securely. Do not deploy the previous validation bundle: it deliberately contains invalid test public settings. Keep server credentials in Worker secrets, never the client build.
4. Build and prepare the complete static cache with `pnpm install --frozen-lockfile` then `pnpm run build`. A production-config dry run checks packaging without uploading. The prior Linux result remains valid for unchanged code; repeat targeted checks only when configuration/code changes justify them.
5. After explicit approval, the deploy-only command is `pnpm exec opennextjs-cloudflare deploy --config wrangler.jsonc`. Record the returned version/deployment IDs and run external smoke checks. This command is documented only, not executed.

If the existing Cloudflare Git integration is later verified as correctly isolated and GitHub access is restored, deploying the approved pinned candidate through that established integration is also reasonable. Use **one** release route; do not trigger both a manual deploy and an automatic production build for the same release.

Until those gates are resolved, do not push/merge the review branch, deploy production, submit production test enquiries or present staging acceptance as complete.
