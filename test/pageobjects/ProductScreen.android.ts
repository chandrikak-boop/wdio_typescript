class ProductsScreenAndroid {

  get firstAddToCartBtn() {
    return $(
      'android=new UiScrollable(new UiSelector().scrollable(true))' +
      '.scrollIntoView(new UiSelector().textContains("ADD TO CART"))'
    );
  }

  get removeBtn() {
    return $(
      'android=new UiSelector().textContains("REMOVE")'
    );
  }

  get cartIcon() {
    return $('~test-Cart');
  }

  async addFirstProductToCart() {
    await this.firstAddToCartBtn.waitForDisplayed({ timeout: 30000 });
    await this.firstAddToCartBtn.click();
    await this.removeBtn.waitForDisplayed({ timeout: 15000 });
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 15000 });
    await this.cartIcon.click();
  }
}

export default new ProductsScreenAndroid();
