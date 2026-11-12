# Consultation persistence incident — 12 November 2026

Status: forms restored through owner-authorised email-only delivery. The database repair below was superseded by the owner's request to remove the migration dependency. No database tables or data were deleted.

Production commit `f7f615185b1ad4c287805e6b15647b4a14091fad` sets ENQUIRY_DELIVERY_MODE=email for contact and consultation. Cloudflare build `24476b81-12fc-43e5-9542-6b6df6f590cf` succeeded. All 15 contract tests and full Linux OpenNext packaging passed. These forms no longer access Supabase; success requires Resend acceptance. Database-backed delivery remains opt-in after schema repair; other database-dependent application features are unchanged.

Live contact and consultation returned 200 with accepted=true and delivery=email. Crucially, both labelled synthetic messages were independently located and their labels verified in hello@nestiquestudio.in's Hostinger INBOX (consultation UID 499, contact UID 500). Retrying both original submission keys returned the same provider message IDs, with one matching message per form. Provider retry protection lasts 24 hours; permanent database deduplication is not claimed. No additional recipient or mailbox settings were changed.

Resend's last_event nevertheless reports bounced for both messages, despite confirmed inbox receipt. This provider-status discrepancy remains unresolved; receipt is verified directly, not inferred from HTTP 200 or provider acceptance. The mailbox exists and its quota usage is approximately 1%; lack of mailbox space is not indicated. Analytics remains unconnected.

The following records describe the earlier database failure and should not be read as the current delivery mode.

The reported request was Worker version `d72c8d81-c7b8-4af6-8a8e-9a19aa09aaf2`, request `5fc9aac9a4a7c09a62400c777b2199c3`, ray `a594ac1a5ca29e4a`, at 15:27:24 IST. Cloudflare account logs are unavailable without an account credential. The original request's exact internal condition has not been correlated to a log entry.

The production response was reproduced as HTTP 503 with `Unable to save your enquiry. Please retry or call the studio.` The sole explicit 503 path is the persistence catch in `handleEnquiry`: it covers database configuration/client creation, insert, or duplicate lookup. Email notification and notification-status errors occur later and cannot generate that 503 response.

Read-only checks using the configured local production Supabase API URL/key return HTTP 404, `PGRST205`, for both `public.consultation_submissions` and `public.contact_submissions`, including an id-only, zero-row query. This demonstrates unavailable enquiry tables in that project's API schema; it does not distinguish absent PostgreSQL tables from stale schema cache without SQL inspection. After the owner's first attempted migration, the same checks still failed. The owner then reported an error or false verification result from the repair; exact output is pending.

The existing self-contained migration is `supabase/migrations/20261111110000_enquiry_idempotency.sql`. It creates both tables, restricts access to service_role, adds request keys/hashes and notification fields, creates unique request-key indexes, and reloads the PostgREST schema cache. `tmp/repair-enquiry-schema.sql` contains this SQL plus a boolean verification query. Run SQL contents, not the filename, in the project matching NEXT_PUBLIC_SUPABASE_URL. Available service-role REST credentials cannot execute schema DDL; no database connection string or Supabase management token is configured.

Local configuration-presence booleans were true for NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and RESEND_API_KEY. These are not proof of the deployed Worker's bindings. A read-only Resend API check succeeded and confirmed the sending domain is verified. This does not establish notification delivery.

Diagnostics commit `637076d88b4086ffd999fa324b65021786c605f4` was deployed successfully through the existing production Git integration. Cloudflare Workers Builds reported success (build `0c9d522a-47a4-4ca7-8ad3-5c9ee699bf49`). It logs configuration-presence booleans, failure stage, allowlisted provider code/status, and correlation IDs, never credentials, provider response bodies or enquiry contents. Persistence failures return a diagnosticId for matching logs. The separate legacy Northflank status failed; the production target is the Cloudflare Worker.

Validation of that change: 11 isolated contract tests passed; full Linux OpenNext packaging/static-cache population passed; local workerd returned a correlated 503 for deliberately absent staging database credentials and logged only safe configuration booleans/stage/code. An initial nullable Resend status type error was corrected before successful packaging.

A single labelled synthetic test key is retained in ignored `tmp/consultation-production-test.json` for safe retries. No row or notification has yet been confirmed. Keep the same key; after repair, verify exactly one persisted row, request-key deduplication, stored notification status/id and provider `delivered` event. Never infer delivery from the HTTP response or notification_status=sent (provider acceptance).

Rollback for the diagnostic code: revert commit 637076d on up-to-date master and push the revert to trigger the Git deployment. Do not roll back the schema by dropping tables or columns; existing enquiry records must be preserved. No schema deletion or production security relaxation was performed.
