import { type Locator, type Page } from '@playwright/test';

export class BasketPage {
    readonly page: Page;
    readonly basketItems: Locator;
    readonly basketCount: Locator; // Sepet sayacı (#basketCount)
    readonly deleteItemBtn: Locator;

    // Form Elemanları
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cardInput: Locator;
    readonly zipInput: Locator;
    readonly countrySelect: Locator;
    readonly citySelect: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basketItems = page.locator('.list-group-item');
        this.basketCount = page.locator('#basketCount'); // Codegen'den öğrendik
        this.deleteItemBtn = page.getByRole('link', { name: 'Delete Item' });

        // Form Elemanları
        this.firstNameInput = page.locator('#name').first();
        this.lastNameInput = page.locator('#name').nth(1);
        this.addressInput = page.getByRole('textbox', { name: 'Address', exact: true });
        this.cardInput = page.getByRole('textbox', { name: 'Credit card number' });
        this.zipInput = page.getByRole('textbox', { name: 'Zip' });
        this.countrySelect = page.getByLabel('Country');
        this.citySelect = page.locator('#city');
        this.submitButton = page.getByRole('button', { name: 'Continue to checkout' });
    }

    async fillForm(name: string, lastName: string, address: string, card: string, zip: string) {
        await this.firstNameInput.fill(name);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.cardInput.fill(card);
        await this.zipInput.fill(zip);
        await this.countrySelect.selectOption('United Kingdom');
        await this.citySelect.selectOption('Bristol');
    }

    async submitOrder() {
        await this.submitButton.click();
    }
}