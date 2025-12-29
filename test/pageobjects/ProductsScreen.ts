class ProductsScreen {

  get addToCartBtn() {
    if (driver.isAndroid) {
      return $$('~test-ADD TO CART')[0];
    }
    return $$('~ADD TO CART')[0];
  }

  get cartIcon() {
    if (driver.isAndroid) {
      return $('~test-Cart');
    }
    return $('~test-Cart');
  }

  async addItemToCart() {
    await this.addToCartBtn.waitForDisplayed({ timeout: 15000 });
    await this.addToCartBtn.click();
    await expect($('~test-REMOVE')).toBeDisplayed();
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
  }
}

export default new ProductsScreen();







// class ProductsScreen {

//   get addToCartBtn() {
//   if (driver.isAndroid) {
//     return $('android=new UiSelector().resourceId("com.swaglabsmobileapp:id/addToCart")');


//   }
//   return $('~ADD TO CART'); 
//   // or $('-ios predicate string:name == "ADD TO CART"');
// }

// get cartIcon() {
//   if (driver.isAndroid) {
//     return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
//   }
//   return $('~test-Cart');
// }


//   async addItemToCart() {
//     await this.addToCartBtn.waitForDisplayed({timeout:10000})
//     await this.addToCartBtn.click()
//     await expect($('~test-REMOVE')).toBeDisplayed();
//   }

//   async openCart() {
//     await this.cartIcon.click()
//   }
// }

// export default new ProductsScreen()
