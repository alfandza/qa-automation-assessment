import { test, expect } from './pages/test-fixture.ts';
 
const categories = [
  'Phones',
  'Laptops',
  'Monitors'
]

test.describe('Home Page test', () => {

  test.beforeEach(async ({ page, homePage }) => {
    await homePage.login(process.env.LoginUsername!, process.env.LoginPassword!);
  });

  for (const category of categories) {
    test(`Purchase ${category} category`, async ({ page, homePage, productPage, cartPage }) => {
      await homePage.selectCategory(category);

      //Take a screenshot of Category Page
      await page.screenshot({ path: `screenshots/${category}/01-category-${category}.png`, fullPage: true });
      
      // Select first item in the phone category
      await homePage.itemStore.nth(0).click();

      // Verify Product and Add To Cart
      await productPage.verifyPageVisible();

      // Take a screenshot of Product Page
      await page.screenshot({ path: `screenshots/${category}/02-product-${category}.png`, fullPage: true });

      // Get product name
      let productName = await productPage.productTitle.textContent();
      // Get product price
      let productPrice = await productPage.productPrice.textContent();
      // Trim price text to just numbers
      const trimPrice = productPrice?.replace(' *includes tax', '').trim();
      const finalPrice = trimPrice?.replace('$', '');
      // click Add to Cart
      await productPage.addToCart();

      // Navigate to Cart page
      await homePage.cartLink.click();
      await page.waitForLoadState('load');

      // Take a screenshot of Cart Page
      await page.screenshot({ path: `screenshots/${category}/03-cart-${category}.png`, fullPage: true });

      // Verify item in cart
      const itemName = await cartPage.getCartItemName(0);
      const itemPrice = await cartPage.getCartItemPrice(0);
      await expect(itemName).toHaveText(productName!);
      await expect(itemPrice).toHaveText(finalPrice!);

      // Proceed to purchase flow
      await cartPage.placeOrderButton.click();

      // Take a screenshot of Place Order Modal
      await page.screenshot({ path: `screenshots/${category}/04-place-order-modal-${category}.png`, fullPage: true });
      
      // Fill in place order form
      const name = 'John Doe';
      const country = 'USA';
      const city = 'New York';
      const creditCard = '4111111111111111';
      const month = '12';
      const year = '2025';

      await cartPage.fillPlaceOrderForm(name, country, city, creditCard, month, year);

      // Take a screenshot of Place Order Modal filled
      await page.screenshot({ path: `screenshots/${category}/05-place-order-modal-${category}.png`, fullPage: true });

      // Submit the order
      await cartPage.placeOrderPurchaseButton.click();

      // Verify success message
      await expect(cartPage.successText).toContainText(creditCard)

      // Take a screenshot of Success Modal
      await page.screenshot({ path: `screenshots/${category}/06-success-modal-${category}.png`, fullPage: true });

      // Close success dialog
      await page.waitForTimeout(2000); // Wait for a second to ensure dialog is ready
      await cartPage.successOkButton.click();

      // Verify return to index page
      await expect(page).toHaveURL('index.html')
    });
  }
});
