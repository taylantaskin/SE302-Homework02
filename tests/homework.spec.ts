import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { SweetsPage } from '../pages/SweetsPage';
import { BasketPage } from '../pages/BasketPage';

test.describe('SE302 Homework 02 - Sweet Shop Tests', () => {

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test('TC_01 Verify Successful Login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.click('text=Login'); // Menüden Login'e tıkla
        await loginPage.login('test@example.com', 'password123');


        await expect(page).toHaveURL(/sweetshop/);
    });


    test('TC_02 Verify Login Fails with Empty Password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.click('text=Login');

        await loginPage.login('test@example.com', '');


        await expect(page.locator('input[type="password"]')).toBeVisible();
    });

    test('TC_05 Verify Navigation via Browse Sweets Button', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.browseSweetsBtn.click();

        await expect(page).toHaveURL(/.*sweets/);
    });

    test('TC_03 & TC_10 Add Product to Basket and Checkout', async ({ page }) => {
        const sweetsPage = new SweetsPage(page);
        const basketPage = new BasketPage(page);

        await page.click('text=Sweets');
        await sweetsPage.addProduct();



        await page.click('text=Basket'); // Sepete git

        await basketPage.fillForm('Taylan', 'Taskin', '123 Test St', '12345678', '34000');

        await basketPage.submitOrder();

        await expect(page).not.toHaveURL(/error/);
    });

});