# Nestique Studio SEO review — 11 November 2026

Changes are local and undeployed. Review alongside the existing uncommitted about-page, API and Supabase work; those changes were present before this task. No production submissions, emails or deployments were sent.

**Release-preparation status:** Linux OpenNext packaging, local workerd, HTTP crawling and desktop/mobile mocked validation have now passed in Ubuntu through WSL. Production release remains blocked by real isolated staging delivery tests, owner content/image approval and account/deployment-isolation checks. The completed Linux section at the end supersedes earlier pending/failure entries. No Git push, workflow dispatch, database migration, staging deployment or production deployment has been performed.

## Verified audit findings

- The live homepage at https://www.nestiquestudio.in was readable by the web tool, including navigation, service text, project descriptions, form fields and contact details. This verifies accessible content, not search indexing or rankings.
- The live title repeated the brand. Existing page titles already included it, while the root title template appended it again.
- Source contained both public/robots.txt and app/robots.ts, and both public/sitemap.xml and app/sitemap.ts. The static sitemap used 2024 dates; static robots included broad XML blocking. Generated routes are now the sole source.
- Root metadata contained a placeholder Google verification token. Root schema asserted office addresses, city-centre coordinates, founding date, payment details and qualifications without supporting records in the project. It also advertised a search action without an implemented search interface. Replaced with Organization and WebSite using visible name, website, phone, email and logo.
- Existing local landing pages contained generic city coordinates, prices, delivery guarantees, qualifications, project counts and NPS claims. Revised 11 pages to conservative service content. Homepage hidden FAQ schema did not match visible FAQ content; removed it. Replaced unsubstantiated homepage testimonial cards with planning guides in the same layout and removed the homepage project-count claim. Other legacy editorial/about claims still require owner review.
- Interior-designer and interior-design pages targeted substantially overlapping city intent. The two /interior-designer-* URLs now issue 308 redirects to the matching /interior-design-* pages and are excluded from the sitemap.
- No analytics collector was found in source. No traffic, rank, conversion or performance score is inferred.
- Images are served unoptimised on the current Cloudflare configuration. The six largest local project files inspected ranged roughly 126–222 KB; this does not measure remote image payloads or establish Core Web Vitals. Existing responsive image sizing, reserved image containers and lazy loading remain in place.
- Public search returned the studio website and a third-party drawing listing, but did not independently establish eligible office addresses or Google Business Profile ownership. Website project details are first-party claims, not independent verification.
- Web-tool retrieval of live robots and sitemap failed; this is a tool limitation, not proof of a production HTTP error. Production redirects, cache behaviour, bot rules and status codes require direct deployment verification.

## Implemented pages and technical changes

Nine statically rendered service pages:

1. /services/architecture — architecture, house and apartment planning
2. /services/office-planning — workplace and commercial planning
3. /services/residential-construction
4. /services/commercial-construction
5. /services/home-interiors
6. /services/commercial-interiors
7. /services/facade-elevation — façade, facade and elevation design
8. /services/renovation
9. /services/landscape

Each has unique metadata, a canonical, one h1, scope and deliverable topics, design-only/execution distinctions, cost and timing factors, customer questions, project references, related service links, enquiry actions and breadcrumb JSON-LD. Specialist drawings and approvals are explicitly scoped rather than universally promised. Landscape content covers planting, hardscape, drainage, irrigation, lighting, drawings, renders and terrace checks.

Existing local URLs improved: /architect-visakhapatnam, /architect-hyderabad, /interior-design-visakhapatnam, /interior-design-hyderabad, /construction-visakhapatnam, /villa-construction-vizag, /commercial-construction-visakhapatnam, /commercial-interior-designer-hyderabad, /office-interior-design-visakhapatnam, /hospital-interior-design-visakhapatnam, /hotel-interior-design-visakhapatnam. Existing design system and shared marketing navigation remain. Existing services hub now links all nine pages; footer destinations better match their labels.

No new city or service-by-city grid was generated. Existing Visakhapatnam and Hyderabad architecture pages serve as contextual city entry points. Bengaluru/Bangalore is mentioned as an enquiry location with coverage to confirm. A dedicated Bangalore page remains gated on genuine service evidence and useful local content.

Next.js host redirect enforces www for requests reaching the app, preserving paths and query strings. Wrangler public site URL now matches. HTTP-to-HTTPS and any edge precedence still need Cloudflare review. Root canonical inheritance removed; sitemap pages have their own canonicals. Removed synthetic build-time last-modified dates. Admin/client layouts now emit noindex; robots is not treated as authentication. JSON-LD escapes less-than signs before embedding.

## Portfolio and content inventory

Retained /portfolio anchors: amogham-telugu-kitchen, jismat-jail-mandi (existing spelling preserved), villa85-iconica-grand, and heritage-apartment. Existing assets and hosted-image manifest are reused; no third-party images added.

Existing journal includes three design-collection articles for Amogham, Gismat and Villa85. The four legacy URLs on multi-floor construction, landscape, apartment interiors and international structural design now contain general planning guides, replacing unsupported delivery narratives and stock images presented as project progress. The blog index and all seven URLs remain available. New service and local pages link to relevant existing project galleries.

The first-party project data identifies Amogham and Gismat in Visakhapatnam and Villa85 at Iconica Grand without a confirmed city. No area, completion date, client brief, approval record or image permission was invented. Gallery and journal content can function as design references, but full delivery case studies need owner evidence. Do not label a render as a completed photograph or infer executed scope from a gallery image. Before launch, confirm image-by-image status and permissions, then add visible captions (photograph / work in progress / proposed render), verified area, date, actual scope, brief and constraints. Preserve existing image URLs when introducing descriptive filenames; current assets already include descriptive project names and existing alt text.

## Enquiries and measurement

Consultation keeps the existing API and now captures property type, additional commercial and façade service options, city, requirements and timeline. Property type is included in the existing message field for storage/email compatibility. Added associated field labels, success/error announcements, and removed a fixed two-hour response promise. Phone and WhatsApp actions remain available. Contact and consultation dispatch `nestique:enquiry` only after a successful HTTP response, with `generate_lead`, form, an allowlisted service and allowlisted city. No names, email, phone, requirements or free text enter the event.

No analytics vendor or new cookies are installed. Connect this event to the existing consent-aware measurement system after access is provided. Track phone/WhatsApp clicks separately as intent, not confirmed leads. Add channel event handling only once the destination collector and consent policy are established. Deduplicate successful leads in the CRM and record qualification there, not in public analytics payloads.

Monthly reporting: Search Console clicks, impressions, queries and landing pages by service intent; site conversions and qualified leads by service and city; fixed-location organic rank samples using a consistent device, location and query set. Track Maps/local-pack visibility separately with a stable geographic grid. Search Console average position is an aggregate, not a precise city rank. Establish a baseline before setting improvement targets.

## Validation and limits

- `npm.cmd run build:next` succeeded, including after the final homepage/contact corrections (54 generated build entries).
- `npm.cmd run build` also passed its Next.js compile, TypeScript and static-generation stages, but OpenNext packaging failed with Windows `EPERM` while creating a dependency symlink. It warned that Windows is not fully supported. This occurred with sandbox escalation too; validate packaging in the existing Linux/WSL/CI deployment environment before release. No security setting was changed to work around it.
- `node scripts/check-seo.mjs` passed against a local production server: 35 sitemap URLs return 200, unique titles and descriptions, exactly one h1, canonical matches and parseable JSON-LD; both consolidation redirects return 308; three missing routes return 404; preferred-host redirect preserves path and query; robots points to sitemap; empty contact/consultation requests return 400 without sending enquiries.
- TypeScript passed through the production build. The validation script is retained for repeatable review; set SEO_TEST_ORIGIN to another local server if needed.
- No real successful submission has been sent. The later release-preparation pass adds isolated persistence/email contracts and browser-mocked success/failure tests; real staging persistence and inbox delivery remain unverified.
- The initial pass had no browser automation. The later pass below adds desktop/mobile Playwright checks and screenshot review. No Lighthouse or field Core Web Vitals score is claimed. Next.js build success is not Cloudflare Worker-runtime validation.

## Business facts and account-dependent checklist

- Owner: confirm exact legal/public business name, actual offices, address/postcode, phone, hours, service radius, site-visit availability, qualifications and registrations. Review inherited about and legacy blog claims. Confirm whether consultations are free for all enquiry types and locations.
- Owner: confirm genuine Bangalore availability and local project evidence before a landing page; avoid implying an office from a service area. Confirm actual project scopes and image permissions/status as above. Obtain written testimonial permission before restoring testimonials.
- Search Console: verify domain, submit generated sitemap, inspect key canonicals/rendered pages, review indexing exclusions and crawl errors. Use an actual token or DNS verification; no placeholder remains.
- Cloudflare: check DNS and www/apex routing, TLS redirect, cache purge requirements, bot/WAF challenges for legitimate crawlers, and Worker image delivery. Test both hosts and HTTP/HTTPS externally. Preserve security rules unless a verified rule blocks legitimate access.
- GBP: find/claim and verify eligible genuine locations only; choose the most accurate primary category and genuinely applicable secondary categories. Confirm hours, service areas, services, phone, website and appointment link. Add owner-approved photographs and UTM-tagged website/appointment links. Never create a branch for a service area alone.
- Local listings: reconcile NAP across the website, GBP, genuine professional directories and verified social profiles. Confirm social profile ownership before including sameAs schema. Seek earned local/project/editorial links and legitimate partner references.
- Reviews: request honest feedback after real work, without incentives or selective positive-only requests; respond professionally without disclosing client information. No purchased or fabricated reviews.
- Analytics/CRM: grant appropriate read access, agree consent policy and event destination, test collection, then track service/city attribution and qualification without sending personal data to analytics.

## Prioritised 30/60/90-day plan

**Days 1–30:** Resolve business/project facts and photo permissions; review inherited legacy claims; run browser/mobile and staging delivery tests; validate the Cloudflare build/runtime; approve deployment. Then check external redirects, robots, sitemap and URL inspection. Establish Search Console, organic/Maps and qualified-lead baselines. Verify GBP eligibility, NAP and categories.

**Days 31–60:** Expand the three existing project stories with evidence-backed briefs, scope, constraints, area/status and image captions. Connect service links directly to those articles. Optimise measured oversized remote images and measured layout/performance issues. Add genuine GBP photography, implement consent-aware events and validate lead attribution. Publish a Bangalore page only if confirmed facts support distinct local value.

**Days 61–90:** Compare queries, landing-page engagement and qualified enquiries against baseline. Improve pages with demonstrated intent gaps or weak conversion; assess overlap before creating more URLs. Earn relevant local and professional references, maintain authentic reviews and GBP updates, and repeat mobile/CWV checks with real field data when available. No fixed ranking or lead-volume deadline is promised.

## Release preparation — continuation on 11 November 2026

### Environment, compatibility and Linux execution

The user confirmed there is no Linux runner or staging environment configured. Inspection found no `.github/workflows` at the start, no Docker executable, and `wsl --list --quiet` reported WSL is not installed. The Git remote is `https://github.com/prasanthkumarsingh/Nestique.git`. The repository already has Cloudflare/OpenNext configuration; its dashboard CI configuration and account are not accessible from this checkout.

Prepared `.github/workflows/release-validation.yml`: manual dispatch plus an exact push trigger for `review/seo-release-validation-20261111`, Ubuntu 24.04, Node 24, pnpm 10.30.3, frozen lockfile, Chromium installation, isolated contracts, **full OpenNext build**, Wrangler upload **dry run**, local packaged **workerd** preview, full SEO crawl, desktop/mobile browser suite, and retained reports/logs. It has read-only repository permission, no deployment step, no production secrets and no real form submissions. The exact push trigger allows a first branch run without merging the workflow into the default branch. It must not be pushed until the separate Cloudflare deployment integration is verified or isolated. It has not been pushed or run. Thus the Windows packaging error is **not yet proven resolved on Linux**.

Installed adapter metadata declares Next `>=15.5.24 <16 || >=16.3.3` and Wrangler `^4.125.0`; installed Next 16.3.4, adapter 1.20.6 and Wrangler 4.128.0 satisfy these ranges. React remains 19.2.3. The non-recursive `build:next` command, existing `nodejs_compat`, compatibility date 2026-08-15, `global_fetch_strictly_public`, ASSETS binding and unoptimised-image approach are retained. Added only Playwright test tooling; package manager is pinned and esbuild/workerd install scripts are explicitly allowed. Frozen lockfile/offline consistency check passed. Neither peer-range compatibility nor the passing Windows Next build establishes Linux packaging/runtime compatibility by itself.

References: [OpenNext supported stack and Windows guidance](https://opennext.js.org/cloudflare), [Cloudflare Wrangler runtime](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

### Implemented form and content fixes

- Contact and consultation still persist to their existing respective tables and notify through Resend. A shared, testable handler adds streamed payload limits, JSON/type/required-field validation, safe HTML rendering and structured JSON errors. Provider error objects and form data are not logged.
- Added `20261111110000_enquiry_idempotency.sql`, a self-contained additive migration that creates the two enquiry tables if absent, preserves service-role-only access and adds unique request-key indexes. It does not require the unrelated uncommitted career migration. Request hashes reject reuse with changed details. Existing records are marked `legacy`, and new records default to `pending` notification status. The migration has not been applied anywhere.
- The UI locks synchronously during submission and reuses the same key when retrying identical data. Database uniqueness handles concurrent requests across Worker instances. A duplicate key with the same payload returns an accepted replay without inserting another record or notifying again; changed details with the same key return 409. It does not promise deduplication of a new intentional submission with a new key or across a full browser reload.
- Database failure returns 503 and sends no email. Success requires confirmed durable persistence. If email fails after saving, the enquiry stays accepted and is marked `failed`; UI wording says received rather than claiming email delivery. Resend receives an idempotency key too. Provider acceptance is not proof of inbox delivery.
- Email/notification-status failure is deliberately not retried automatically on a user replay. Review `pending`/`failed` records and reconcile them with provider logs before a controlled resend, especially following a crash between saving and notifying. A scheduled outbox/reconciliation worker is not implemented. Old cached forms without a submission key must refresh; their requests fail safely rather than sending duplicate mail.
- Non-production environments require separate enquiry database settings and a separate test Resend key/recipient. The known production Supabase host and `@nestiquestudio.in` recipients are rejected in this mode; missing configuration fails closed. Production requires `APP_ENV=production`, now declared in `wrangler.jsonc`. A separate, unbound-to-production `wrangler.staging.jsonc` is prepared.
- Homepage contact details previously travelled in a GET query to `/consultation`; it now renders the actual consultation form and submits via POST. No personal details enter the URL through that flow.
- Browser code checks both HTTP status and `{success:true, accepted:true}` before displaying success. `nestique:enquiry` fires only for a new confirmed acceptance, not for validation failure, network/server failure, an unconfirmed 200 or a deduplicated replay. Payload contains exactly `event`, `form`, allowlisted `service` and allowlisted `city`. **No analytics collector is connected.** The custom event is an integration point only.
- Removed residual count/NPS/qualification/founding schema claims from About while retaining the existing team ordering, portraits, content layout and CSS. Removed office-address claims from Contact and its schema, including the Bangalore office claim. Location cards now describe enquiries and availability. Removed fixed consultation/response-time promises, universal free-consultation offers and hidden package-price values. Team biographies/roles still need owner confirmation; no qualifications are inferred from role names.
- Converted four legacy articles to neutral planning guides, retaining URLs. Removed unsupported construction specifications, project delivery/overseas claims, client testimonials and mislabelled stock project-progress imagery from those pages. Removed keyword arrays used for repetitive or unsupported superlatives. No project completion evidence was invented.
- Footer no longer claims six-city execution coverage. Bangalore remains an enquiry option with explicit availability confirmation and no dedicated landing page or office claim.

### Completed validation and observed failures

| Check | Result and scope |
| --- | --- |
| Frozen pnpm lockfile consistency | Passed locally with pnpm 10.30.3 |
| Final Windows `build:next` | Passed; TypeScript and 54 static-generation entries completed |
| Isolated form contracts | 10 passed using injected in-memory adapters; eight concurrent attempts per form produce one stored record and one notification call |
| Browser checks | Final rerun passed all 10 checks (5 scenarios × desktop/mobile) after the copy changes, including all nine service pages |
| Local SEO HTTP crawl | Passed: 35 sitemap pages, 29 internal link destinations, 54 local assets; unique titles/descriptions, one h1, canonical matches, indexability, JSON-LD parseability, redirects, query preservation, robots, 404s, required-field API validation |
| Visual review | Inspected mobile service-page screenshot and desktop portfolio modal screenshot; no horizontal overflow was detected at tested 1440×1000 and 390×844 viewports |
| Actual Linux OpenNext packaging | Not run: no Linux/WSL/Docker environment or remote-runner access; Ubuntu workflow prepared |
| Packaged Worker/workerd tests | Not run yet; included as mandatory post-packaging steps in the workflow |
| Real staging database/email tests | Not run: user confirmed there are no staging credentials/resources; all successful tests are explicitly mocks |
| Image rights and completed-work status | Unresolved; per-file review inventory prepared |

Browser coverage includes navigation and mobile-menu closure, all nine service-page layouts, About, Contact, Consultation, portfolio filtering, image modal open/next/previous/Escape, phone and WhatsApp URL targets, HTML required-field validation, dropdown choices, property details, pending state, synchronous duplicate-submit prevention, retained values on error, successful reset and success-only PII-free events. Phone dialling and WhatsApp messages were not initiated. Screenshots and HTML reports are under ignored `release-results/`. The source suite is under `tests/release/`.

The first browser run exposed two test issues: the pending button changes its accessible name to “Sending…”, and Next also supplies a route-announcer `alert`. Fixed the selectors and held the mock response with a deterministic gate; the subsequent 10-check suite passed. The repeated `NoFallbackError` messages in the Next server log occurred during unknown dynamic-path requests, which returned 404 as asserted; packaged-Worker behaviour must still be checked in Ubuntu. No change was made to suppress those errors without runtime evidence.

No Lighthouse, field CWV, physical-device, authenticated portal, career-submission or provider-delivery claim is made. Production WAF/TLS/cache behaviour remains account-dependent.

### Image and owner confirmation gates

`release/image-review.json` lists all 32 existing public portfolio assets, source URLs, collection association, rights status, media type and completion status. No documentary permission was found. `release/README.md` explains the evidence limits. Gallery text now describes design references pending classification.

Representative inspection found `amogham.jpeg` and `villa85-1.jpeg` appear to be visualisations; that is a tentative visual observation, not owner-verified proposed-render classification. `jismat3.webp` is a people photograph with a **SOCIALNEWS.XYZ watermark**: require source licence and appropriate consent or omit it from the release. Other files are individually unclassified. No work-in-progress photograph or project completion status was verified. Team-portrait rights also need confirmation.

Owner must confirm: public/legal business name; valid professional titles/qualifications and team roles; real offices if any; service/visit/execution coverage for Vizag, Hyderabad and especially Bangalore; hours and consultation charges; project attribution, actual scope, locations, areas and dates; exact image types, original sources, licences and identifiable-person consent; testimonial authenticity/permission before restoration. Removed numbers/guarantees/prices should stay absent until supported. Confirm prior blog publication dates before treating them as documentary records.

### GitHub setup to complete

1. Review the working-tree diff, including separately identified pre-existing About/API/Supabase work. Do not stage everything indiscriminately. No commit or push was made here.
2. In the repository settings, enable GitHub Actions with read-only repository contents access and hosted Ubuntu runners. No secrets are needed for this mocked validation workflow. It uses public placeholder Supabase settings and does not contact a real database or email adapter.
3. Check the Cloudflare Git integration first: pushing/merging a branch may trigger its existing automatic deployment. Prevent deployment of the validation branch before pushing. This workflow itself does not deploy. Do not merge release code into an auto-deployed production branch under the present no-deployment instruction.
4. After review, make the manual workflow available on the default branch using the repository's normal review process, then Actions → “Release validation (no deployment)” → Run workflow on the exact reviewed ref. Record the commit SHA and run URL. If publishing the workflow to the default branch would auto-deploy the application, pause that deployment integration or use an isolated validation repository first.
5. Require the OpenNext build, Wrangler dry run, packaged workerd crawl and browser steps to all pass. Download the report/log artifact. The placeholder-key build is **not a deployable production artifact**; do not deploy it. If a step fails, preserve its log and fix the actual failure before approving release.

### Exact staging variables and tests still required

Create a separate Supabase project and a non-production Resend sending setup/test inbox. Configure credentials in provider environment/secret settings or ignored local development variables, never source, workflow YAML, logs or chat. No real values are supplied in this report.

| Variable | Where and purpose |
| --- | --- |
| `APP_ENV=staging` | Staging Worker runtime; already declared in `wrangler.staging.jsonc` |
| `NEXT_PUBLIC_SUPABASE_URL` | Build environment: separate staging project URL for portal/public client code |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Build environment: staging publishable/anon key |
| `NEXT_PUBLIC_SITE_URL` | Build/public setting; retain production canonical policy; configure staging auth callback separately |
| `ENQUIRY_DATABASE_URL` | Staging Worker secret: separate test project URL; must not be the production project |
| `ENQUIRY_DATABASE_SERVICE_ROLE_KEY` | Staging Worker secret: test-project server credential only |
| `ENQUIRY_TEST_RESEND_API_KEY` | Staging Worker secret: separate test sending credential; never the production key |
| `ENQUIRY_TEST_RECIPIENT` | Staging Worker secret/config: controlled non-production inbox; `@nestiquestudio.in` is rejected |
| `ENQUIRY_FROM` | Staging Worker setting: sender permitted by the test Resend setup |
| `SUPABASE_SERVICE_ROLE_KEY` | Only if staging portal/admin flows are tested: staging project's key, never production |
| `CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_API_TOKEN` | Deployment environment only when a future deployment is authorised; token scoped to intended account/Workers. Not needed for current local workerd/CI mocks |

Do not provide production `RESEND_API_KEY` to staging. Contact/consultation use `ENQUIRY_TEST_RESEND_API_KEY` there; other endpoints are not authorised for successful staging tests in this run. Configure the staging hostname's Supabase auth callback if portal testing is later requested. Protect any public staging URL using Cloudflare Access and an appropriate `X-Robots-Tag: noindex, nofollow` response rule; canonical tags alone do not prevent indexing. No public staging URL exists yet.

After staging deployment is separately authorised: apply required Supabase schema and the two submission migrations in order; use synthetic names, `example.invalid` reply-to values and unique request keys; submit Contact and Consultation; verify exactly one row and its fields, `notification_status=sent`, stored provider ID, provider delivered/bounced status and receipt in the test inbox. Repeat the same key concurrently, test a conflicting payload, stop database access and simulate email rejection. Verify no duplicate row/mail and that pending/failed notifications are recoverable. Clean up only the exact synthetic record IDs after recording evidence. Mock success must not be presented as these real checks passing.

### Deployment procedure — documentation only, not executed

All deployment commands below require a future explicit deployment instruction and the release gates above. Use a clean Linux checkout of the approved SHA; never reuse the placeholder CI build for production.

For staging, after its resources and Access protection exist:

```bash
corepack enable
pnpm install --frozen-lockfile
# Supply staging NEXT_PUBLIC_* in this Linux build environment.
pnpm exec opennextjs-cloudflare build --config wrangler.staging.jsonc
pnpm exec opennextjs-cloudflare populateCache local --config wrangler.staging.jsonc
pnpm exec wrangler deploy --dry-run --config wrangler.staging.jsonc
# Only when staging deployment is authorised:
pnpm exec opennextjs-cloudflare deploy --config wrangler.staging.jsonc
```

Set the staging Worker secrets through its Cloudflare environment settings (or `wrangler secret put NAME --config wrangler.staging.jsonc` interactive input) before form validation. Do not place secret values on the command line. Staging is named `nestique-staging`, has no production routes in its config and must not be bound to the production domain.

For an approved production release:

1. Capture the currently active Worker version and deployment IDs, current approved source SHA, dashboard build settings and runtime configuration. Back up relevant database records/settings through the account's normal process. Check the production submission tables and apply the additive submission migrations only after migration review. Verify service-role-only access remains in place.
2. In a clean Linux checkout, set production `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `NEXT_PUBLIC_SITE_URL=https://www.nestiquestudio.in` in the build environment. Production Worker must have `APP_ENV=production`, the existing `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY`; preserve all unrelated bindings/secrets. Optional `ENQUIRY_FROM` must be a verified sender.
3. Build and validate that exact version locally in Linux:

```bash
pnpm install --frozen-lockfile
pnpm run test:contracts
pnpm run build
pnpm exec wrangler deploy --dry-run --config wrangler.jsonc
# In another terminal, local runtime only (no --remote):
pnpm exec wrangler dev --config wrangler.staging.jsonc --ip 127.0.0.1 --port 8788
# Then run against that local packaged runtime:
SEO_TEST_ORIGIN=http://127.0.0.1:8788 pnpm run check:seo
RELEASE_BASE_URL=http://127.0.0.1:8788 pnpm run test:browser
```

The staging config is used for this local runtime so accidental successful real API calls cannot select production recipients/credentials. Browser success requests are mocked; the HTTP suite sends only invalid empty submissions. Stop the local runtime after verification.

4. Record the rollback target before deploying:

```bash
pnpm exec wrangler deployments list --config wrangler.jsonc
pnpm exec wrangler versions list --config wrangler.jsonc
```

5. Only with production deployment authorised, deploy the already verified bundle (the deploy-only adapter command avoids rebuilding different code):

```bash
pnpm exec opennextjs-cloudflare deploy --config wrangler.jsonc
```

6. Record the new version/deployment IDs. Check both hosts and HTTP/HTTPS, apex path/query redirect, key pages, sitemap/robots, assets, 404s, canonical/indexing directives and Worker logs externally. Clear only verified stale HTML/cache entries if needed. Successful production form tests require separate authorisation and must not be silently substituted for staging tests. Submit the sitemap in Search Console and complete account checks only after approval and access.

### Exact rollback procedure

If release smoke checks fail, use the **recorded previous active version ID**, not a guessed or automatically selected version:

```bash
pnpm exec wrangler rollback <RECORDED_PREVIOUS_ACTIVE_VERSION_ID> --config wrangler.jsonc
pnpm exec wrangler deployments list --config wrangler.jsonc
```

Confirm the deployment now serves that version. Check the homepage, existing services, contact/consultation page loads, prior URL behaviour and relevant logs against the previous release's baseline; the new 35-page crawl is not an appropriate expectation if the previous version lacks the nine new pages. Revert/pause the Git-based deployment trigger too, otherwise a subsequent automatic build may redeploy the faulty SHA. Review stale edge HTML before any selective purge.

Leave the additive database columns/indexes and saved enquiries in place during code rollback; they are compatible with the older insert paths. Do not drop tables, delete enquiries or automatically run reverse SQL. Worker rollback does not undo database writes, DNS, external provider state or all account-level settings. If the previous version or its assets are no longer available, rebuild the recorded known-good SHA with its lockfile/config on Linux and deploy that only after operator review. Verify any changed environment bindings separately.

References: [Cloudflare rollbacks](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/), [Wrangler Worker/version commands](https://developers.cloudflare.com/workers/wrangler/commands/workers/).

## First Linux run request — access and review-branch preparation

The requested remote operation is currently blocked by access, not by a reported CI failure:

- Origin is `https://github.com/prasanthkumarsingh/Nestique.git`; local upstream is `origin/master` at base commit `cab2a6e`.
- The Git credential manager returned a credential when allowed to access its store, but GitHub rejected authenticated repository, Actions, hooks, secrets, environments and deployment-metadata requests with **HTTP 401**. Credential values were kept in memory and not printed or written. Secret names could not be inspected, so their availability is **unknown**, not confirmed absent.
- `wrangler whoami` reported **not authenticated**. Cloudflare branch/deploy triggers cannot be read or changed yet. No account settings were changed. No push was attempted because it could not be established that the separate Git integration would not deploy production.
- A GitHub integration was offered; it was not confirmed connected at the time of this check. Refresh GitHub access through the integration or Git Credential Manager, and authenticate Wrangler locally. Never paste tokens into chat.
- Created local branch `review/seo-release-validation-20261111` in `tmp/release-review`, based on the existing HEAD. The main working tree remains on its original branch with its files preserved. No force checkout, stash or reset was used.
- The review checkout excludes unrelated About CSS, later team additions/portraits, career API edits, shared Supabase admin-helper edits and the uncommitted `20261029153000_form_submissions.sql`. SEO-only About edits are rebuilt on the committed baseline. The new enquiry adapter resolves its own runtime credentials; its migration now supplies only its own two tables. Neither depends on shipping the unrelated work.
- An initial local dependency junction was rejected by Turbopack because it pointed outside the checkout. The junction was removed without touching its target. A separate cached install was not approved and was not retried. This is a local checkout check limitation, not a Linux packaging result.
- The isolated checkout passed TypeScript checking and all 10 mocked form contracts using the existing ancestor tooling, without an additional install or production credentials. It has not passed a fresh Next/OpenNext build; the earlier full build/browser/crawl results apply to the combined local checkout described above. Removed an unnecessary reference to ignored generated `CloudflareEnv` types from the email helper so fresh checkouts do not rely on that local file.
- `release/PR-DRAFT.md` contains the concrete draft-PR title/body. The workflow now supports a first push-triggered run on the exact review branch, so merging a workflow into production is unnecessary. Opening the PR, running CI and checking staging secrets remain pending authentication and deployment isolation.

Before pushing, an authorised operator must verify the `nestique` Worker's **Settings → Builds** configuration, including the production branch, preview/legacy branch triggers and deploy commands. Exclude this exact review branch from any legacy non-production trigger that invokes a production deployment command, preserving all existing exclusions. If necessary pause the affected automatic trigger while validating, without changing the live deployment. Check GitHub workflows/webhooks/apps for independent deployment triggers too. The local workflow's lack of a deploy step does not disable a separate Cloudflare integration. Re-read settings after any change; then push only the isolated review branch and open a draft PR, with no merge.

Cloudflare's trigger API uses the Worker's tag rather than its name: [trigger listing](https://developers.cloudflare.com/api/resources/workers_builds/subresources/triggers/methods/list/), [branch-filter constraints](https://developers.cloudflare.com/workers/ci-cd/builds/troubleshoot/). Do not guess that a new branch is safe without checking the account's actual trigger mode/settings.

Staging setup remains exactly the variable table above: `APP_ENV=staging`, staging `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` at build time, and `ENQUIRY_DATABASE_URL`, `ENQUIRY_DATABASE_SERVICE_ROLE_KEY`, `ENQUIRY_TEST_RESEND_API_KEY`, `ENQUIRY_TEST_RECIPIENT`, `ENQUIRY_FROM` in staging Worker settings. If a future protected staging test workflow uses a GitHub `staging` environment, place those settings there along with its non-production URL; do not give a production key to the mock-only validation job. No real staging writes or emails were attempted. Analytics remains unconnected.

## Authentication-independent Linux continuation

Cloudflare authentication is **not a prerequisite** for OpenNext packaging, `wrangler deploy --dry-run`, loopback-only workerd, HTTP crawling or the mocked browser/form suite. It is required only for account inspection or account mutations. GitHub authentication is a separate prerequisite for pushing/opening a PR/using Actions, not for local source-archive validation. No further browser/device login attempts are required for the local path.

Latest environment check: WSL is not installed; Docker/Podman and a Linux execution host are unavailable. The latest independent GitHub check again returned HTTP 401. These are separate findings. The existing `.open-next/` directory is incomplete and has no `worker.js`, so it cannot honestly be used as a packaged-runtime test artifact.

Prepared `scripts/bootstrap-linux-validation.sh` and `scripts/validate-linux-local.mjs`. The source can be archived directly from the isolated local review commit without GitHub or environment files. The bootstrap creates a Linux-native temporary workspace and installs official checksummed Node 24, pinned pnpm and Linux browser dependencies. The runner strips provider/Cloudflare credentials, refuses local secret files, uses invalid test settings and an isolated Wrangler configuration directory, then packages OpenNext and runs the local workerd/HTTP/browser sequence. It records per-stage results and stops its own runtime. It does not execute login, `--remote`, a real deployment, version upload or a build trigger. The workflow dry run now explicitly uses the staging configuration too.

JavaScript, Bash and PowerShell helper syntax checks passed. All 10 isolated mocked form contracts passed again. The Linux build and packaged-runtime checks remain **not run**, pending a Linux environment; no result is inferred from syntax checks. The one current user action is Administrator PowerShell: `wsl --install -d Ubuntu-24.04`, then restart only if prompted. After WSL is ready, the assistant can continue archive import/tooling/tests without either account login. This installation may require first-launch Linux user setup; give that as a separate next step only if needed.

For later account checks, `scripts/check-cloudflare-integration.mjs` is a GET-only reader for the existing `nestique` Git/build integration and branch filters. Existing integration tokens are not assumed to grant local API access. If necessary, create a user-scoped read-only token, limited to the intended account: Workers CI Read/build-configuration Read, plus Workers Scripts Read to resolve the Worker tag. No script-write, DNS, route-edit or deployment permissions are needed for inspection. A separate reviewed build-configuration Edit grant would be needed only to alter isolation. `scripts/save-cloudflare-readonly-token.ps1` uses hidden input and Windows DPAPI to store it outside Git at `%LOCALAPPDATA%\Nestique\cloudflare-readonly.credential.xml`; do not paste the token into chat. The helper rejects non-Windows systems to avoid unencrypted credential export.

Full future token setup and storage details are in `release/LOCAL-LINUX-AND-ACCOUNT-ACCESS.md`. They are deferred until account inspection is needed, rather than added as another current manual task. No account changes, production deployment, staging writes or real emails occurred. Analytics remains unconnected.

## Completed Linux validation through WSL — 11 November 2026

**Passed end to end without Cloudflare or GitHub credentials.** The installed WSL distribution is named `Ubuntu` and identifies itself as Ubuntu 26.04.1 LTS, WSL 2. This is an actual local Linux/workerd result; it is not a claimed GitHub Actions/Ubuntu 24.04 run. The GitHub workflow remains unrun.

Imported the environment-free review source archive based on `8d4d2fd` into `/tmp/nestique-validation.xetPPveZ/source`. Installed official checksummed Linux Node 24.22.2, pnpm 10.30.3 and separate frozen-lockfile Linux dependencies. No Windows node_modules, production environment files, unrelated About/team edits or production records were used. The final tested source includes the two cache-fix files listed in `release/linux-validation.json` with matching SHA-256 hashes.

### Failures found and fixed

1. **Real Worker 404 for generated service slugs.** The original dummy incremental cache discarded the build-generated entries needed by `dynamicParams=false`; `/services/architecture` returned 404 in workerd although the Next build succeeded. Configured OpenNext's supported read-only Workers Static Assets incremental cache, using the existing ASSETS binding. Added `opennextjs-cloudflare populateCache local` to `pnpm run build` so direct Wrangler builds/deployments have the cached pages packaged too. No R2/KV/D1 resource or account login is needed. This cache is suitable for the current build-time marketing content and does not implement ISR; future revalidation requires an appropriate writable cache. [OpenNext cache guidance](https://opennext.js.org/cloudflare/caching).
2. **Browser libraries missing in the fresh distro.** Chromium downloaded successfully but could not load `libnspr4.so`. Installed its Linux system dependencies with `playwright install-deps chromium` as WSL root, while all source/dependency builds and tests remained under Linux user `prasa`. The bootstrap now downloads browsers separately rather than unexpectedly prompting for sudo during validation.
3. The initial invocation used an assumed distro name and a PATH containing unquoted Windows paths. Corrected the invocation to the actual `Ubuntu` name with a Linux-only PATH. Neither error required account authentication or a change to application dependencies.

### Final results

| Check | Verified result |
| --- | --- |
| Frozen dependency install | Passed, Linux native esbuild/workerd installed |
| TypeScript / Next static generation | Passed inside the full OpenNext build; 54 generated entries |
| OpenNext packaging | Passed; `.open-next/worker.js` produced |
| Static cache population | Passed through the build script |
| Wrangler staging-config dry run | Passed without authentication; 152 packaged assets; 8,711.63 KiB total / 1,710.40 KiB gzip |
| Local workerd | Started successfully on `127.0.0.1:8788`; stopped by the runner afterward, with port confirmed no longer listening |
| Packaged HTTP/SEO crawl | Passed: 35 sitemap pages, 29 internal destinations, 51 referenced local assets |
| Metadata / crawl semantics | Unique titles/descriptions, one h1, canonical matches, indexability, parseable JSON-LD, sitemap/robots, permanent redirects, host redirect query preservation, required-field API validation and 404s passed |
| Isolated form contracts | 10 passed on Linux; persistence/deduplication/provider-failure behaviour tested with injected mocks |
| Desktop/mobile browsers | 10 passed against packaged workerd at 1440×1000 and 390×844, including all nine service pages, navigation, gallery controls, forms and success-only PII-free events |
| Visual inspection | Inspected the Linux-rendered service page and mobile gallery modal; no tested horizontal overflow or browser page errors |

The 51-asset crawl is for the isolated review checkout; the earlier 54-asset count was from the combined Windows checkout containing unrelated team edits. The dry-run count of 152 includes build/cache assets and is a different measure.

The final workerd log contains 29 client-disconnect messages (broken pipe/connection reset) during browser navigation. There are no logged 5xx responses and no remaining `NoFallbackError` messages; all browser assertions passed. The disconnects appear consistent with cancelled browser requests, rather than the corrected route failure. This is an interpretation of the local log, not a claim about production telemetry. The messages were retained, not suppressed; check the corresponding behaviour in staging.

Machine-readable evidence is committed in `release/linux-validation.json`. Detailed logs, per-stage summary, Playwright HTML report and screenshots were copied to ignored `release-results/linux-wsl-validation/`; earlier failure-stage summaries are retained there. No real upload or deployment was performed. These placeholder-credential build outputs are validation artifacts and must not be deployed to production.

### Remaining blockers, separately from successful local validation

- **GitHub:** last independent access check returned HTTP 401. Push, draft PR and the Ubuntu 24.04 Actions run remain pending refreshed GitHub access; this did not block WSL tests. No push was attempted.
- **Cloudflare account:** CLI/account authentication and external Git deployment-isolation checks remain outstanding. None were prerequisites for, or used in, this Linux run. Use the prepared GET-only integration checker/read-only token path when account inspection is next authorised and configured.
- **Real staging:** no separate Supabase/email credentials are available to this run. Successful form persistence, actual provider delivery/inbox receipt and operational notification recovery still require isolated staging. The passing form/browser tests use mocks; no production enquiries or emails were sent.
- **Owner facts and image rights:** the prior checklist and 32-image review inventory remain open, especially the SOCIALNEWS.XYZ-watermarked `jismat3.webp`, tentative visualisation status of `amogham.jpeg`/`villa85-1.jpeg`, actual project scope/location/completion, professional roles/qualifications and Bangalore coverage. No new factual claim was inferred from test success.
- **Measurement:** analytics collection remains unconnected and unverified. The browser suite verifies the local custom-event boundary only.

## Frozen release candidate and real-staging follow-up

Candidate is fixed at **942dc19dd266924673fdf12647e8b31ba3593d26**. Its isolated worktree is clean. Linux validation remains **passed**; no candidate code changed and no Linux tests were rerun in this follow-up. Operational documents and the new acceptance harness are outside the candidate in `release-operations/rc-942dc19/`.

The owner confirmed staging still needs setup. Only production settings were found locally; no staging URL/provider settings or saved read-only Cloudflare credential were available. Current GitHub API checks returned HTTP 401 and Wrangler reported no authentication. Real staging persistence/deduplication/email delivery, actual domain/account mapping, automatic deploy triggers and a usable prior Worker version therefore remain **blocked/unverified**, not passed. No production settings were reused and no real test email or database write was sent. The operational harness's preflight reported the missing setting names and made zero network requests.

Completed available work: prepared the localhost real-provider acceptance harness and staging setup guide; reviewed the candidate target names (`nestique` / `nestique-staging`) and no-deploy workflow source; verified installed Wrangler rollback/history command syntax without invoking rollback; checked current rollback and branch-control documentation; produced an owner sign-off sheet covering business/team/service/project facts, all 32 linked portfolio images, three candidate portraits and the logo.

Read `release-operations/rc-942dc19/RELEASE-GATES.md` for the verified/unverified target matrix, exact rollback evidence still needed and simplest eventual deployment route. Read `OWNER-APPROVAL.md` for approve/correct/withhold decisions. Read `STAGING-SETUP.md` for the separate test-project/email settings and acceptance procedure. The current single owner setup action is enabling the offered Supabase integration; no tokens should be pasted into chat. Analytics remains unconnected. No production deployment or Git push occurred.
