import { type Locator, type Page } from '@playwright/test';

export class SweetsPage {
    readonly page: Page;
    readonly sweetsNavLink: Locator;
    readonly addToBasketBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        // Codegen'den gelen "Sweets" linki:
        this.sweetsNavLink = page.getByRole('link', { name: 'Sweets' });

        // Codegen karmaşık bir yol vermişti.
        // Biz bunu basitleştirip "Ürün kartının altındaki buton" olarak tanımlıyoruz.
        // .first() komutu ile sayfadaki ilk "Add to Basket" butonunu seçeceğiz.
        this.addToBasketBtn = page.locator('.card-footer .btn').first();
    }

    async navigate() {
        await this.sweetsNavLink.click();
    }

    async addProduct() {
        await this.addToBasketBtn.click();
    }
}