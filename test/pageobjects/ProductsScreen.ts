export class ProductsScreen {

  get productsTitle() {
    return $('~test-PRODUCTS');
  }

  get addToCartButtons() {
    return $$('~test-ADD TO CART');
  }
  get cartIcon() {
  if (driver.isAndroid) {
    return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
  }
  return $('~test-Cart');
}

  async addItemToCart() {
    // 1️⃣ Ensure Products screen
    await this.productsTitle.waitForDisplayed({ timeout: 20000 });

    // 2️⃣ Scroll until buttons appear (BrowserStack needs this)
    await browser.waitUntil(async () => {
      const count:any = (await this.addToCartButtons).length;
      if (count === 0) {
        await driver.execute('mobile: scroll', { direction: 'down' });
      }
      return count > 0;
    }, {
      timeout: 20000,
      timeoutMsg: 'No ADD TO CART buttons found'
    });

    // 3️⃣ Click first product
    const firstBtn = this.addToCartButtons[0];
    await firstBtn.waitForDisplayed();
    await firstBtn.click();

    // 4️⃣ Assertion
    await expect($('~test-REMOVE')).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.click()
  }
}

export default new ProductsScreen();


/*class ProductsScreen {

  get addToCartBtn() {
  if (driver.isAndroid) {
return $('~test-ADD TO CART');


  }
  return $('~ADD TO CART'); 
  // or $('-ios predicate string:name == "ADD TO CART"');
}

get cartIcon() {
  if (driver.isAndroid) {
    return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
  }
  return $('~test-Cart');
}


  async addItemToCart() {
    await this.addToCartBtn.waitForDisplayed({timeout:10000})
    await this.addToCartBtn.click()
    await expect($('~test-REMOVE')).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.click()
  }
}

export default new ProductsScreen()*/