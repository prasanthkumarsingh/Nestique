# Portal auth — Supabase dashboard setup

**Client portal**: email + password. Clients never pick a password in the admin
UI — they get an email with a link to `/client/create-password` and set it
themselves. Forgot password re-sends that link.

**Admin portal**: email + password.
- **First visit** — "First time here? Create your password" → enter email → 8‑digit
  OTP → verify → choose a password. Works even with no `auth.users` row yet
  (the OTP creates it); gated by `is_admin_email_allowed`, so the email must
  already be in the `admins` table.
- **Forgot password** — same OTP flow, re-set the password.

There is no self-service admin signup — an existing admin must add the email in
**Admin → Admins** first.

## Bootstrapping the first admin (no email needed)

Both admin flows above need Supabase to send the OTP email. If mail isn't
flowing yet, set the first admin's password directly with the service-role key:

```bash
node scripts/set-admin-password.mjs hello@nestiquestudio.in 'Welcome@123'
```

It creates/updates the `auth.users` row (email pre-confirmed) and upserts the
`admins` allowlist row. Then sign in at `/admin/login`.

## 1. Environment variables

Add to `.env.local` (and the production environment):

| Key | Value |
| --- | --- |
| `SUPABASE_SERVICE_ROLE_KEY` | Project → Settings → API → `service_role` secret. Server-only. |
| `NEXT_PUBLIC_SITE_URL` | Public origin, no trailing slash. `http://localhost:3000` in dev, `https://nestiquestudio.in` in prod. |

## 2. Auth providers (Dashboard → Authentication → Providers → Email)

- **Enable Email** provider.
- **Enable "Confirm email"** — the invite link doubles as email confirmation.
- Password min length: 8 (matches the create-password form).

## 3. URL configuration (Dashboard → Authentication → URL Configuration)

- **Site URL**: `https://nestiquestudio.in`
- **Redirect URLs** — add both:
  - `http://localhost:3000/auth/confirm`
  - `https://nestiquestudio.in/auth/confirm`

## 4. Email templates (Dashboard → Authentication → Email Templates)

Point the link in **Invite user** and **Reset password** at `/auth/confirm` using
the token-hash flow so the session is written to cookies:

**Invite user** — body link:

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&next=/client/create-password">
  Create your password
</a>
```

**Reset password** — body link:

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next=/client/create-password">
  Set a new password
</a>
```

`/auth/confirm` also accepts a `?code=` param, so a default (PKCE) template will
still work — but the snippets above are the reliable path.

## 5. Flow summary

1. Admin adds a client in **Admin → Clients**. The app calls
   `POST /api/client/send-setup-link`, which runs
   `auth.admin.inviteUserByEmail(email, { redirectTo })`.
   - If the client already has an auth account, it falls back to
     `resetPasswordForEmail`.
2. Client clicks the email link → `/auth/confirm` verifies the token, sets the
   session cookie, and redirects to `/client/create-password`.
3. Client sets a password (`auth.updateUser`) and is sent to `/client`.
4. Return visits: `/client/login` → email + password
   (`auth.signInWithPassword`). "Forgot password?" re-sends the link via
   `resetPasswordForEmail` (gated by the `is_client_email_allowed` RPC).
5. **Resend link** in the Clients table re-triggers step 1 for an existing row.

No schema changes are required — the `clients` / `admins` allowlists and RLS
policies are unchanged.

## Admin sign-in flow

1. `/admin/login` → email + password (`auth.signInWithPassword`), then an
   `is_admin_email_allowed` RPC check (non-admins are signed back out).
2. "Create your password" (first time) / "Forgot password?" → same path:
   `is_admin_email_allowed` check → `auth.signInWithOtp({ shouldCreateUser: true })`
   sends the 8‑digit code → `auth.verifyOtp` → choose a password
   (`auth.updateUser`) → `/admin`.

> Both OTP paths depend on Supabase being able to send email. If codes aren't
> arriving, fix SMTP (custom Resend SMTP under Auth → Emails) or use
> `scripts/set-admin-password.mjs` in the meantime.
