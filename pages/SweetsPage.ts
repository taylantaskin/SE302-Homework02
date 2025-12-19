import { type Locator, type Page } from '@playwright/test';

export class SweetsPage {
    readonly page: Page;
    readonly sweetsNavLink: Locator;
    readonly addToBasketBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.sweetsNavLink = page.getByRole('link', { name: 'Sweets' });

        this.addToBasketBtn = page.locator('.card-footer .btn').first();
    }

    async navigate() {
        await this.sweetsNavLink.click();
    }

    async addProduct() {
        await this.addToBasketBtn.click();
    }
}