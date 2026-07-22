import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { DashboardPage } from './pages/dashboard.page';

const LOGIN_URL = process.env.LOGIN_URL || 'https://stage-cdp.dibaadm.com/login';
const TEST_EMAIL = process.env.TEST_EMAIL || 'kmbs@cdp.com';
const TEST_PASSWORD = process.env.TEST_PASSWORD || 'admin123';

test.describe('Kanzul Madaris CDP dashboard access', () => {
  test('allows a user to sign in and see the dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto(LOGIN_URL);
    await loginPage.login(TEST_EMAIL, TEST_PASSWORD);

    await dashboardPage.expectLoaded();
    await dashboardPage.expectSidebarNavigationVisible();
  });

  test('shows validation when password is missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto(LOGIN_URL);
    await loginPage.emailInput.fill(TEST_EMAIL);
    await loginPage.signInButton.click();

    await expect(loginPage.passwordInput).toHaveAttribute('required', /required/i);
  });
});
