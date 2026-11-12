# Real staging acceptance for candidate 942dc19

Status: blocked because the owner confirmed staging still needs setup. No real database writes or emails have been sent. Linux packaging/workerd validation remains passed and is not being rerun. These operational files are outside the frozen candidate.

The simplest staging route needs no public Worker: start the already-packaged candidate locally through workerd with its `wrangler.staging.jsonc`, backed by a separate Supabase project and a separate Resend test sending setup. Do not use the production `.env.local`, the production Supabase project `tpkawdequqsvvtwsjfya`, or a production Resend credential.

## Current single owner step

Enable the offered Supabase integration so the assistant can inspect staging options and prepare the schema. If it is not used, the equivalent manual task is to create a separate Supabase project named `nestique-staging`; do not change the existing project. Token values are not needed in chat. Email setup and secret storage follow as separate steps after the staging project exists.

## Settings needed later

Keep these in staging secret settings, or in an explicitly supplied ignored local staging file; none belong in this document or source. If using a local file, `.env.staging.local` is ignored by the existing `.env*` rule. Copy only staging settings into the isolated Linux runtime's ignored `.dev.vars` with mode 0600. Do not place private secrets in the public build variables.

| Setting | Purpose |
| --- | --- |
| `APP_ENV=staging` | Explicit staging-only server behaviour |
| `ENQUIRY_DATABASE_URL` | Separate staging Supabase URL |
| `ENQUIRY_DATABASE_SERVICE_ROLE_KEY` | Separate project's server-only credential |
| `ENQUIRY_TEST_RESEND_API_KEY` | Dedicated test email credential; metadata-reading capability is needed for the delivery check |
| `ENQUIRY_TEST_RECIPIENT` | One controlled non-production inbox; the application rejects `@nestiquestudio.in` |
| `ENQUIRY_FROM` | Sender permitted by the separate test email setup |
| `STAGING_BASE_URL=http://127.0.0.1:8788` | The assistant-controlled local Worker, not the production site |
| `STAGING_CONFIRMED_RC=942dc19` | Set only after confirming the running Worker is this candidate with staging configuration |

Staging public Supabase URL/publishable key are needed if portal/client flows are later tested. Contact/consultation use the explicit server staging settings above, so their tests do not require rebuilding the already-tested candidate merely to test a separate database. The current validation bundle's invalid public settings are not suitable for production deployment.

Apply the candidate's self-contained `20261111110000_enquiry_idempotency.sql` only to staging, after confirming the project URL/reference. It creates the two enquiry tables and their idempotency fields/indexes, enables RLS and revokes anonymous/authenticated table access. Do not run migration commands against a default or ambiguous project.

## Test procedure once configured

1. Start an owned localhost workerd instance using the candidate's staging config and only staging secrets. Confirm port ownership, candidate identity and non-production bindings before setting `STAGING_CONFIRMED_RC`. The harness deliberately supports only localhost to avoid mistaking a production domain for staging.
2. Load the staging environment without printing values, then run `node release-operations/rc-942dc19/staging-acceptance.mjs` for preflight. It performs no network requests by default.
3. Run with `--execute` when preflight passes. This sends one synthetic contact and one synthetic consultation. It queries only rows matching their exact generated request keys, verifies fields and notification IDs, repeats each key six times, verifies conflict rejection and required-field validation, and checks the exact provider message IDs for delivery to the configured test inbox. It does not list unrelated emails or database rows.
4. Verify the two marked messages in the actual test inbox, including spam/junk, and check there is one notification per form. Provider `delivered` means accepted by the recipient's mail server, not guaranteed inbox placement. The script reports inbox confirmation separately rather than fabricating it.
5. Retain the generated request/row/message IDs for review. Clean up only those synthetic row IDs afterward. The evidence file is ignored locally and contains no credentials. Do not post test data or credentials in analytics.

The automated provider query uses [Resend's retrieve-email endpoint](https://resend.com/docs/api-reference/emails/retrieve-email) and its `last_event`. A sending-only credential may require separate provider-log access for delivery verification. Database outages and email rejection were already tested with mocks; destructive provider/account reconfiguration is not performed by this acceptance harness. A real failure drill, if needed, uses a separate disposable runtime, never the successful instance or production resources.
