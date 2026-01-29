//Page Object Model Base Page
import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    readonly addToCartLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('h2.name');
        this.productPrice = page.locator('h3.price-container');
        this.addToCartLink = page.getByRole('link', { name: 'Add to cart' });
    }

    // Verify Product Page is visible
    async verifyPageVisible() {
        await expect(this.productTitle).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.addToCartLink).toBeVisible();
    }

    // Click Add to Cart
    async addToCart() {
        await this.addToCartLink.click();
    }

}