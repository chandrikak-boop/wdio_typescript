class ProductsScreen {

  get addToCartBtn() {
  if (driver.isAndroid) {
    return $('//*[@content-desc="test-ADD TO CART"]')
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
    await this.addToCartBtn.waitForDisplayed()
    await this.addToCartBtn.click()
    await expect($('~test-REMOVE')).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.click()
  }
}

export default new ProductsScreen()
