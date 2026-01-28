//Page Object Model Base Page
import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly tableCart: Locator;
    readonly placeOrderButton: Locator;

    // Place Order locators
    readonly placeOrderModal: Locator;
    readonly placeOrderName: Locator;
    readonly placeOrderCountry: Locator;
    readonly placeOrderCity: Locator;
    readonly placeOrderCreditCard: Locator;
    readonly placeOrderMonth: Locator;
    readonly placeOrderYear: Locator;
    readonly placeOrderPurchaseButton: Locator;

    readonly successText: Locator;
    readonly successOkButton: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.tableCart = page.locator('tbody#tbodyid')
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });

        // Place Order
        this.placeOrderModal = page.getByRole('dialog', { name: 'Place order' });
        this.placeOrderName = this.placeOrderModal.locator('input#name');
        this.placeOrderCountry = this.placeOrderModal.locator('input#country');
        this.placeOrderCity = this.placeOrderModal.locator('input#city');
        this.placeOrderCreditCard = this.placeOrderModal.locator('input#card');
        this.placeOrderMonth = this.placeOrderModal.locator('input#month');
        this.placeOrderYear = this.placeOrderModal.locator('input#year');
        this.placeOrderPurchaseButton = this.placeOrderModal.getByRole('button', { name: 'Purchase' });

        this.successText = page.locator('p.lead.text-muted');
        this.successOkButton = page.getByRole('button', { name: 'OK' });

    }

    async getCartItemName (item: number) {
        return this.tableCart.locator('tr').nth(item).locator('td').nth(1);
    }

    async getCartItemPrice (item: number) {
        return this.tableCart.locator('tr').nth(item).locator('td').nth(2);
    }

    async getCartDeleteLink (item: number) {
        return this.tableCart.locator('tr').nth(item).locator('td').nth(3).getByRole('link', { name: 'Delete' });
    }

    // Fill Place Order Form
    async fillPlaceOrderForm(name: string, country: string, city: string, creditCard: string, month: string, year: string) {
        await this.placeOrderName.fill(name);
        await this.placeOrderCountry.fill(country);
        await this.placeOrderCity.fill(city);
        await this.placeOrderCreditCard.fill(creditCard);
        await this.placeOrderMonth.fill(month);
        await this.placeOrderYear.fill(year);
    }

}