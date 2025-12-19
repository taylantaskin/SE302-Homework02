import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly browseSweetsBtn: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Codegen ile doğruladığın buton:
        this.browseSweetsBtn = page.getByRole('link', { name: 'Browse Sweets' });

        // Codegen ile doğruladığın link:
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    // Ana sayfaya gitme fonksiyonu
    async goto() {
        await this.page.goto('https://sweetshop.netlify.app/');
    }
}