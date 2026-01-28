// test_fixture.ts
//Page Object Model Fixture Setup
import { test as base, expect } from '@playwright/test';
import { HomePage } from './home.page.ts';
import { ProductPage } from './product.page.ts';
import { CartPage } from './cart.page.ts';

type Fixtures = {
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
};

const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { test, expect };