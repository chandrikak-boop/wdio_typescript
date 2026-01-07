import { driver, $, expect } from '@wdio/globals';

class ProductsScreen {

  get addToCartBtn() {
    if (driver.isAndroid) {
      return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]');
    }
    return $('~test-ADD TO CART');
  }

  get cartIcon() {
    // SAME locator for Android & iOS
    return $('~test-Cart');
  }

  async addItemToCart() {
    await this.addToCartBtn.waitForDisplayed({ timeout: 30000 });
    await this.addToCartBtn.click();

    await $('~test-REMOVE').waitForDisplayed({ timeout: 30000 });

    // iOS click stabilization
    if (driver.isIOS) {
      await driver.pause(500);
     
    }

    await this.cartIcon.waitForDisplayed({ timeout: 30000 });
    if (driver.isIOS) {
      await driver.pause(500);
    }
    await this.cartIcon.click()
    if (driver.isIOS) {
      await driver.pause(500);
    }
    await $('~test-CHECKOUT').waitForDisplayed({ timeout: 30000 });
  }
}

export default new ProductsScreen();


