class ProductsScreen {

  // ====== LOCATORS ======

  get productsTitle() {
    return $('~test-PRODUCTS');
  }

  // FIRST "ADD TO CART" button (generic & stable)
  get firstAddToCartBtn() {
    return $(
      '//android.view.ViewGroup[contains(@content-desc,"ADD TO CART")]'
    );
  }

  get removeBtn() {
    return $(
      '//android.view.ViewGroup[contains(@content-desc,"REMOVE")]'
    );
  }

  get cartIcon() {
    return $('~test-Cart');
  }

  // ====== ACTIONS ======

  async waitForProductsScreen() {
    await this.productsTitle.waitForDisplayed({ timeout: 20000 });
  }

  async addFirstProductToCart() {
    await this.waitForProductsScreen();

    await this.firstAddToCartBtn.waitForDisplayed({ timeout: 15000 });
    await this.firstAddToCartBtn.click();

    // Validate item added
    await expect(this.removeBtn).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 10000 });
    await this.cartIcon.click();
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