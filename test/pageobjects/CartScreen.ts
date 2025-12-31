import { $ } from '@wdio/globals';

class CartScreen {

  get checkoutBtn() {
    return $('~test-CHECKOUT')
  }

  async proceedToCheckout() {
    await this.checkoutBtn.waitForDisplayed()
    await this.checkoutBtn.click()
  }
}

export default new CartScreen()
