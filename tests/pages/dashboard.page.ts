import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly quickActionsSection: Locator;
  readonly profileSummarySection: Locator;
  readonly adminDashboardLink: Locator;
  readonly counselorDashboardLink: Locator;
  readonly candidateDashboardLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
    this.quickActionsSection = page.getByRole('heading', { name: 'Quick Actions' });
    this.profileSummarySection = page.getByRole('heading', { name: 'Profile Summary' });
    this.adminDashboardLink = page.getByRole('link', { name: 'Admin Dashboard' });
    this.counselorDashboardLink = page.getByRole('link', { name: 'Counselor Dashboard' });
    this.candidateDashboardLink = page.getByRole('link', { name: 'Candidate Dashboard' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.quickActionsSection).toBeVisible();
    await expect(this.profileSummarySection).toBeVisible();
    await expect(this.candidateDashboardLink).toBeVisible();
  }

  async expectSidebarNavigationVisible(): Promise<void> {
    await expect(this.adminDashboardLink).toBeVisible();
    await expect(this.counselorDashboardLink).toBeVisible();
    await expect(this.candidateDashboardLink).toBeVisible();
  }
}
