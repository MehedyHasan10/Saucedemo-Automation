import { test, expect } from "@playwright/test";
import { attachScreenshot } from "../utils/screenshot.js";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { CartPage } from "../pages/CartPage.js";
import { HeaderPage } from "../pages/HeaderPage.js";

test("User logs in, adds product to cart, verifies, and logs out", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const headerPage = new HeaderPage(page);

  let addedProductName;

  await test.step("Open SauceDemo login page", async () => {
    await loginPage.goto();
    await attachScreenshot(page, "Login Page Screenshot", test.info());
  });

  await test.step("Login with valid credentials", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await attachScreenshot(page, "Login Step Screenshot", test.info());
  });

  await test.step("Add first product to cart", async () => {
    addedProductName = await inventoryPage.addFirstProduct();
    await attachScreenshot(page, "Add Product Screenshot", test.info());
  });

  await test.step("Open cart", async () => {
    await inventoryPage.openCart();
    await attachScreenshot(page, "Open Cart Screenshot", test.info());
  });

  await test.step("Verify product in cart", async () => {
    const cartProduct = await cartPage.getProductName();
    expect(cartProduct).toBe(addedProductName);
    await attachScreenshot(page, "Verify Cart Screenshot", test.info());
  });

  await test.step("Logout", async () => {
    await headerPage.logout();
    await attachScreenshot(page, "Logout Screenshot", test.info());
  });
});
