import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly cartItem: Locator;
    readonly removeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItem = page.locator('.cart_item');
        this.removeButton = page.getByRole('button', { name: 'Remove'});
    }

    async removeFromCart() {
        await this.removeButton.click();
    }
}