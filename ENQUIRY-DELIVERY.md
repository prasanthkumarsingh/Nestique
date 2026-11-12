# Production enquiry delivery

Contact and consultation use email-only delivery, selected by `ENQUIRY_DELIVERY_MODE=email` in the production Wrangler configuration. A working RESEND_API_KEY Worker secret is required. No Supabase schema migration is required for these two forms; no enquiry database writes are attempted. Other application features retain their existing database dependencies.

Success means Resend accepted the notification for hello@nestiquestudio.in; it does not claim database storage or inbox delivery. Provider delivery events must be checked separately. Failed sends return an error so the visitor can retry or call.

Validation, HTML escaping, client in-flight protection, stable per-payload UUIDs and provider idempotency are retained. Resend suppresses repeated sends with the same key and payload for 24 hours; this is not permanent database deduplication. Analytics remains unconnected.

Migration files are retained as history; no tables, records or permissions are deleted. Restoring database-backed delivery requires completing and verifying the enquiry schema before removing the email delivery mode and redeploying. Roll back code with a revert commit on master, not a force push; reverting this change before repairing the schema will restore the consultation 503.
