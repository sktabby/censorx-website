1. Open your Google Form in edit mode and copy the form ID from the URL:
   `https://docs.google.com/forms/d/<FORM_ID>/edit`
2. Create a new Google Apps Script project and paste the contents of [career-form-proxy.gs](/c:/Users/Shaikh%20Tabish/Desktop/censorx-website/apps-script/career-form-proxy.gs#L1).
3. Replace `FORM_ID` in [career-form-proxy.gs](/c:/Users/Shaikh%20Tabish/Desktop/censorx-website/apps-script/career-form-proxy.gs#L1) if your form ID changes.
4. Deploy the script as a Web App.
5. Use:
   Execute as: `Me`
   Who has access: `Anyone`
6. Copy the `/exec` URL and set it as `VITE_CAREER_FORM_PROXY` in `.env.local`.
7. Optionally also set `VITE_TEAM_IMAGE_PROXY` in `.env.local`. If you omit it, the team card reuses `VITE_CAREER_FORM_PROXY`.
8. Restart the Vite dev server after changing `.env.local`.

Career form notes:
- Turn off `Collect email addresses` because the form already has a custom `E-Mail` question.
- Turn off `Limit to 1 response`.
- Keep the multi-section layout if you want; the Apps Script submitter handles it server-side.

Protected Aqsa image setup:
1. Open the Apps Script project you deployed.
2. In [career-form-proxy.gs](/c:/Users/Shaikh%20Tabish/Desktop/censorx-website/apps-script/career-form-proxy.gs#L206), temporarily replace:
   `REPLACE_WITH_DRIVE_FILE_ID`
   `REPLACE_WITH_PASSWORD`
3. Run `setupAqsaProtectedMember()` once from Apps Script.
4. That stores:
   `AQSA_MEMBER_FILE_ID`
   `AQSA_MEMBER_PASSWORD_HASH`
   in Script Properties.
5. Revert the placeholder values in the function after setup so the plain password is not left in the script.

How to get the Drive file ID:
- Open the uploaded image in Google Drive.
- Copy the file URL.
- The file ID is the part between `/d/` and `/view`, or after `id=` depending on the URL shape.

Important:
- Do not import Aqsa's real image anywhere in the frontend after this setup, or it will be exposed in the site bundle.
- The current implementation protects the image with Apps Script and a password hash, but the unlock request still depends on a browser-visible tokenized URL. It is suitable for privacy gating, not high-security access control.
