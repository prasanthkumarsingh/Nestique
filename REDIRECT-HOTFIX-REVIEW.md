# Production redirect hotfix — 12 November 2026

Deployed commit: `8841948bb19e53e62db05c43bff6da588cda9102`, based on production branch commit `bac83dc0b80c681f36a8c2c79c7066e82f31d17d`. Only `next.config.ts` changed in the deployed commit. Unrelated local work was preserved in the original checkout.

The installed OpenNext redirect matcher treats host conditions as regular expressions. The unanchored apex hostname also matched www, causing self redirects. For an empty root wildcard it retained the raw destination `/:path*`. Both failures were reproduced in local workerd before the change.

The fix anchors and escapes the apex hostname (`^nestiquestudio\\.in$` in the TypeScript string) and puts a concrete `/` destination before the wildcard rule. No Cloudflare account rules were edited. Account-level redirect rules could not be inspected without Cloudflare API authentication; the responsible application rule was reproduced locally and its correction verified live.

Validation passed: separate Linux dependency installation, full OpenNext packaging and static cache population; ten local workerd assertions covering both hosts, root, paths, encoded query values and repeated parameters.

Deployment used the existing Git integration: fast-forward push of the isolated hotfix to master, triggering Workers Builds for `nestique`. Cloudflare reported success: https://dash.cloudflare.com/914283452f35876f77f1358648d14420/workers/services/view/nestique/production/builds/fc552cde-166b-4abf-a025-b95e4107012c . The separate legacy Northflank status failed; this did not prevent the Cloudflare deployment or successful live checks.

Live HTTP checks after deployment:

- HTTP and HTTPS apex `/`: one 308 to `https://www.nestiquestudio.in/`, then 200.
- HTTPS www `/`: 200 with no Location header.
- Apex root with `city=Vizag&query=a%2Fb`: one 308 preserving the query exactly, then 200.
- Apex `/services/architecture?city=Vizag&query=a%2Fb`: one 308 preserving the path and query exactly, then 200. Direct HTTPS www request: 200.
- Apex `/blog?tag=office&tag=home`: one 308 preserving both parameters, then 200.
- Missing www URL: 404, without a redirect.
- HTTP www `/`: 200, without a redirect. HTTPS enforcement for this host remains an independent Cloudflare configuration follow-up.

None of these live chains emitted a literal wildcard or looped. No production forms were submitted.

If a browser retains the previous permanent redirect, open the canonical homepage in a private window or clear site data. The old literal `/:path*` URL is not the homepage.

Rollback procedure: revert commit `8841948` on an up-to-date master and push the resulting revert commit; the existing Git integration rebuilds and deploys it. This would restore the known broken redirect, so use only if a more serious regression requires it. Do not reset or force-push master. Cloudflare dashboard version rollback is an alternative requiring account access and identification of the exact prior version; no version rollback was performed.
