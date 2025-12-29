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

  // Scroll UNTIL first Add To Cart is visible
  await driver.execute('mobile: scroll', {
    strategy: 'accessibility id',
    selector: 'test-ADD TO CART'
  })

  const addBtn = await $('//*[@content-desc[contains(., "test-ADD TO CART")]]')

  await addBtn.waitForDisplayed({ timeout: 15000 })
  await addBtn.click()

  await expect($('//*[@content-desc[contains(., "test-REMOVE")]]')).toBeDisplayed()
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
