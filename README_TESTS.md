Playwright test template

This repository includes a Playwright test template that demonstrates a login flow using environment variables for credentials.

Files added:
- tests/login.spec.ts — template login test that reads TEST_EMAIL and TEST_PASSWORD from environment variables.

Quick setup (Windows PowerShell):

1. Install dependencies (in project root):

```powershell
npm install
# If Playwright browsers are missing, install them:
# npx playwright install
```

2. Set credentials and optional login URL in PowerShell (only for your shell session):

```powershell
$env:TEST_EMAIL = 'kmbs@cdp.com'
$env:TEST_PASSWORD = 'admin123'
$env:LOGIN_URL = 'https://stage-cdp.dibaadm.com/login'  # optional
```

3. Run tests:

```powershell
npm test
```

Notes & safety:
- Do NOT commit your credentials to the repository. Use environment variables or a secure vault.
- The test uses simple selectors that may need updating to match the real login form (input names, button selectors).
- The test will skip if the env vars are not set.

Troubleshooting:
- If Playwright cannot find browsers, run `npx playwright install`.
- To see the UI while debugging use `npm run test:headed`.
- For interactive debugging use `npm run test:debug`.

If you want, I can:
- Update selectors for the real login form if you paste the login page HTML or the selector attributes.
- Add .env example and instruction to load it safely (gitignored).
- Create a small script that runs login then captures console/network logs.
