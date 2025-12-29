class ProductsScreen {

  get addToCartButtons() {
    if (driver.isAndroid) {
      return $$('//*[@content-desc[contains(., "test-ADD TO CART")]]')
    }
    return $$('~test-ADD TO CART')
  }

  get cartIcon() {
    return $('~test-Cart')
  }

  async addItemToCart() {

    // CI-safe scroll
    await driver.execute('mobile: scroll', { direction: 'down' })

    const buttons = this.addToCartButtons

    await browser.waitUntil(
      async () => (await buttons.length) > 0,
      { timeout: 15000, timeoutMsg: 'No ADD TO CART buttons found' }
    )

    const firstBtn = buttons[0]
    await firstBtn.waitForDisplayed({ timeout: 10000 })
    await firstBtn.click()

    // Validate REMOVE appeared for first product
    if (driver.isAndroid) {
      await expect($('//*[@content-desc[contains(., "test-REMOVE")]]')).toBeDisplayed()
    } else {
      await expect($('~test-REMOVE')).toBeDisplayed()
    }
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 10000 })
    await this.cartIcon.click()
  }
}

export default new ProductsScreen()








//-------------------------------------------------

// class ProductsScreen {

//   get addToCartBtn() {
//   if (driver.isAndroid) {
//     return $('//*[@content-desc="test-ADD TO CART"]')
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
