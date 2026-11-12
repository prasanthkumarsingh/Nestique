Title: Prepare SEO service pages and isolated Cloudflare release validation

Draft status: local PR text only; no GitHub pull request has been created.

Nestique's marketing routes repeated brand titles, had conflicting crawl files and contained unsupported office, pricing and delivery claims. This change adds nine detailed service pages, consolidates overlapping interior URLs, cleans up metadata/content and links to the existing portfolio.

Contact and consultation now require confirmed persistence, use durable request-key deduplication and emit PII-free lead events only after confirmed acceptance. The enquiry migration is self-contained and additive; it has not been applied. Analytics collection remains unconnected.

An Ubuntu workflow validates OpenNext packaging, Wrangler dry run, local workerd, the SEO crawl and desktop/mobile browser behaviour. Its only push trigger is `review/seo-release-validation-20261111`; it has no deployment step. Cloudflare's separate Git integration must be verified or isolated before pushing this branch.

Validation: the isolated release source passed full OpenNext packaging and cache population on Ubuntu 26.04.1 through WSL, an unauthenticated Wrangler dry run, local workerd, 10 mocked form contracts, 10 desktop/mobile browser checks and a crawl of 35 sitemap pages, 29 link destinations and 51 assets. The initial workerd crawl found generated service pages returning 404 with the dummy prerender cache; using the existing ASSETS binding as a read-only cache and populating it during the build fixed that verified defect. The GitHub Actions/Ubuntu 24.04 run, real staging persistence and real email delivery remain unverified.

Release gates: GitHub/Cloudflare access and deployment isolation before pushing; real isolated staging tests; owner approval of business facts, project scope and image rights (particularly the SOCIALNEWS.XYZ-watermarked Gismat image). Bangalore remains availability-by-enquiry. Analytics remains unconnected. Do not merge or deploy production as part of this draft review.

Scope preservation: unrelated About CSS/team additions/portraits, career API edits, shared Supabase helper edits and the earlier uncommitted career/submissions migration are excluded. About metadata/claim cleanup is applied to the committed baseline instead. No environment files or secret values are included.
