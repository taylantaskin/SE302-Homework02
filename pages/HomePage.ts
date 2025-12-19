import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly browseSweetsBtn: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.browseSweetsBtn = page.getByRole('link', { name: 'Browse Sweets' });

        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('https://sweetshop.netlify.app/');
    }
}