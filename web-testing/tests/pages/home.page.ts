//Page Object Model Base Page
import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly contactLink: Locator;
    readonly aboutUsLink: Locator;
    readonly cartLink: Locator;
    readonly loginLink: Locator
    readonly signUpLink: Locator; 

    // Login locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly verifyLogIn: Locator;

    // Categories locators
    readonly phoneCategory: Locator;
    readonly laptopCategory: Locator;
    readonly monitorCategory: Locator;

    // Items locators
    readonly itemStore: Locator;


    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.aboutUsLink = page.getByRole('link', { name: 'About us' });
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.signUpLink = page.getByRole('link', { name: 'Sign up' });

        // Login
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.verifyLogIn = page.locator('#nameofuser')

        // Categories
        this.phoneCategory = page.getByRole('link', { name: 'Phones' });
        this.laptopCategory = page.getByRole('link', { name: 'Laptops' });
        this.monitorCategory = page.getByRole('link', { name: 'Monitors' });

        // Items (use nth(x) to select specific item)
        this.itemStore = page.locator('div#tbodyid div.card.h-100');

    }

    // Navigate to home page
    async navigate() {
        await this.page.goto('');
    }

    // Navigate + Login
    async login(username: string, password: string) {
        await this.navigate();

        // Click Login Link
        await this.loginLink.click();

        // Wait for field to appear
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await this.page.waitForTimeout(2000);

        //Input credentials
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        // Click Login Button
        await this.loginButton.click();

        // Verify login successful
        await expect(this.loginButton).not.toBeVisible();
        await expect(this.verifyLogIn).toBeVisible();
    }

    async selectCategory(category: string) {
        switch (category.toLowerCase()) {
            case 'phones':
                await expect(this.phoneCategory).toBeVisible();
                await this.phoneCategory.click();
                await this.page.waitForTimeout(3000);
                break;
            case 'laptops':
                await expect(this.laptopCategory).toBeVisible();
                await this.laptopCategory.click();
                await this.page.waitForTimeout(3000);
                break;
            case 'monitors':
                await expect(this.monitorCategory).toBeVisible();
                await this.monitorCategory.click();
                await this.page.waitForTimeout(3000);
                break;
        }
    }

}