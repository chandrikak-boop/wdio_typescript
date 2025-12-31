class CartScreen {

  get cartTitle() {
    return $('~test-YOUR CART');
  }

  get checkoutBtn() {
    return $('~test-CHECKOUT');
  }

  // async waitForCartScreen() {
  //   await this.cartTitle.waitForDisplayed({
  //     timeout: 20000,
  //     timeoutMsg: 'Cart screen not displayed'
  //   });
  // }

  async proceedToCheckout() {
   // await this.waitForCartScreen();

    if (driver.isIOS) {
      await driver.execute('mobile: scroll', {
        predicateString: 'name == "test-CHECKOUT"',
        direction: 'down'
      });
    }

    await this.checkoutBtn.waitForDisplayed({
      timeout: 20000,
      timeoutMsg: 'Checkout button not visible'
    });

    await this.checkoutBtn.click();
  }
}

export default new CartScreen();



// class CartScreen {

//   get checkoutBtn() {
//     return $('~test-CHECKOUT')
//   }

//   async proceedToCheckout() {
//     await this.checkoutBtn.waitForDisplayed()
//     await this.checkoutBtn.click()
//   }
// }

// export default new CartScreen()
