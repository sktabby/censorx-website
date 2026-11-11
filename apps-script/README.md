1. Open your Google Form in edit mode and copy the form ID from the URL:
   `https://docs.google.com/forms/d/<FORM_ID>/edit`
2. Create a new Google Apps Script project and paste the contents of [career-form-proxy.gs](career-form-proxy.gs).
3. Replace `FORM_ID` in [career-form-proxy.gs](career-form-proxy.gs) if your form ID changes.
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
2. In [career-form-proxy.gs](career-form-proxy.gs), temporarily replace:
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


---

# Contact page forms (School partnership + Feedback)

Backend file: [contact-forms.gs](contact-forms.gs). It is separate from the career proxy and needs its own Apps Script project.

For every submission it validates the data, drops bots and double-submits, saves a row in a Google Sheet (tabs `Schools` and `Feedback`), and emails a notification to `team@censorx.in` with Reply-To set to the sender.

Setup:
1. Sign in to the Google account that should own the responses (ideally the `team@censorx.in` account).
2. Go to https://script.google.com, create a new project, and paste in the contents of [contact-forms.gs](contact-forms.gs).
3. If notifications should go somewhere else, change `NOTIFY_EMAIL` at the top.
4. Select the `setup` function and click Run. Approve the permission prompt (Sheets + send email). This creates the spreadsheet "CensorX - Contact form responses" in that account's Drive and logs its URL.
5. Deploy > New deployment > Web app.
   Execute as: `Me`
   Who has access: `Anyone`
6. Copy the `/exec` URL and set it as `VITE_CONTACT_FORM_PROXY` in `.env.local` (and in the build environment used for production).
7. Restart the Vite dev server, or rebuild the site.

Notes:
- After editing the script, use Deploy > Manage deployments > Edit > New version. The `/exec` URL stays the same.
- To check it is live, open the `/exec` URL in a browser. It should show `{"ok":true,"message":"Contact form backend is running."}`.
- Until `VITE_CONTACT_FORM_PROXY` is set, the forms show a message asking the visitor to email instead.
- The dropdown and chip options live in the React form files. The script accepts any text for them, so you can change options without redeploying.
- Free Google accounts can send about 100 notification emails a day. Rows are still saved if the email limit is hit.
