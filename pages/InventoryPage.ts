import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;

    constructor (page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addToCart() {
        await this.page
            .getByRole('button', { name: 'Add to cart' })
            .first()
            .click()
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}