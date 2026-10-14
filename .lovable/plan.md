# Seller Accounts and Business Profiles

## What will change
- Use real email signup with a six-character minimum password and no extra character rules; keep existing username-based seller logins working.
- Show a clear duplicate-email error when account authentication reports one, and preserve the backend's email-confirmation behavior.
- Add an optional seller business profile in the dashboard, with optional brand, image, description, category, location, phone, website, and social links.
- Store profile details with the authenticated seller, allow only that seller to edit/upload, and show available details on marketplace listings and product pages.
- Repair product publishing without removing existing rows or weakening ownership checks; ensure the authenticated account has its profile row before product insertion.

## Technical details
- Add nullable profile columns and point product/inquiry seller references at the existing profile ID, retaining the profile-to-auth-user relationship.
- Create a public-read image bucket with upload, replace, and delete policies limited to the signed-in seller's own folder.
- Update generated database types and the existing TanStack/Supabase pages; add focused password-rule coverage.

## Verification
- Check the migration and policies, password validation and duplicate-error handling, signed-in profile save/read, and product publishing with the current account where preview access permits.
- Check the relevant content-page metadata and preview diagnostics; preserve existing products and seller accounts.
