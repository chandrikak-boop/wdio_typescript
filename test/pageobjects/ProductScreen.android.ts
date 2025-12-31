export class ProductsScreenAndroid {

  get firstAddToCartBtn() {
    return $(
      '(//android.view.ViewGroup[contains(@content-desc,"ADD TO CART")])[1]'
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

  async addFirstProductToCart() {
    await this.firstAddToCartBtn.waitForDisplayed({ timeout: 25000 });
    await this.firstAddToCartBtn.click();
    await expect(this.removeBtn).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 15000 });
    await this.cartIcon.click();
  }
}

export default new ProductsScreenAndroid();
