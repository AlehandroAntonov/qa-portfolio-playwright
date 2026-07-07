import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";
import { InventoryPage } from "../pages/InventoryPage";

test ('add item to cart updates badge', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
});

test ('item is visible in cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addToCart();
    await inventoryPage.goToCart();
    await expect(cartPage.cartItem).toBeVisible();
})

test ('remove item to cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addToCart();
    await inventoryPage.goToCart();
    await cartPage.removeFromCart();
    await expect (cartPage.cartItem).toBeHidden();
})