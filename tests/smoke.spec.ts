import { test, expect} from '@playwright/test';

test ('home page opens successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle(/Swag Labs/);
});

test ('login form is visible', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test ('successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByRole('textbox',  { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login '}).click();
    await expect(page).toHaveURL(/inventory/);
});

test ('failed login show error message', async ({ page })=> {
    await page.goto('https://www.saucedemo.com');
    await page.getByRole('textbox', { name: 'Username' }).fill('wrong_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrong_password');
    await page.getByRole('button', {name: 'Login' }).click();
    await expect(page.getByText('Epic sadface')).toBeVisible();
});