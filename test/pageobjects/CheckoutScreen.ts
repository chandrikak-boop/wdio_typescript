import { driver, $ } from '@wdio/globals';

class CheckoutScreen {

  get firstName() {
    return $('~test-First Name')
  }

  get lastName() {
    return $('~test-Last Name')
  }

  get zipCode() {
    return $('~test-Zip/Postal Code')
  }

  get continueBtn() {
    return $('~test-CONTINUE')
  }

  get finishBtn() {
    return $('~test-FINISH')
  }

  async fillDetails(firstName :string,lastName:string,zipCode:string) {
    await this.typeFirstName(firstName)
    await this.typeLastName(lastName)
    await this.typeZipCode(zipCode)
    await this.continueBtn.click()
  }

 async typeFirstName(value: string) {
    await this.firstName.waitForDisplayed();
    await this.firstName.clearValue();
    if (driver.isIOS) {
      // iOS SAFE TYPING
      for (const char of value) {
        await this.firstName.addValue(char);
        //await driver.pause(10); // CRITICAL
      }
    } else {
      // Android
      await this.firstName.setValue(value);
    }
  }

   async typeLastName(value: string) {
    await this.lastName.waitForDisplayed();

    await this.lastName.clearValue();

    if (driver.isIOS) {
      // iOS SAFE TYPING
      for (const char of value) {
        await this.lastName.addValue(char);
        //await driver.pause(10); // CRITICAL
      }
    } else {
      // Android
      await this.lastName.setValue(value);
    }
  }

   async typeZipCode(value: string) {
    await this.zipCode.waitForDisplayed();

    await this.zipCode.clearValue();

    if (driver.isIOS) {
      // iOS SAFE TYPING
      for (const char of value) {
        await this.zipCode.addValue(char);
        //await driver.pause(10); // CRITICAL
      }
    } else {
      // Android
      await this.zipCode.setValue(value);
    }
  }



  //  async finishCheckout() {

  // if (driver.isAndroid) {
  //   await $('android=new UiScrollable(new UiSelector().scrollable(true))' +
  //           '.scrollTextIntoView("FINISH")');
  //   await this.finishBtn.waitForDisplayed({ timeout: 10000 });
  // await this.finishBtn.click();
  // } else {
  //   // iOS scrolling
  //   await $('~FINISH').scrollIntoView();
  //   await this.finishBtn.waitForDisplayed({ timeout: 10000 });
  // await this.finishBtn.click();
  // }

  

//   if (driver.isAndroid) {
//     await expect(
//       $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]')
//     ).toBeDisplayed();
//   } else {
//     await expect(
//       $('~THANK YOU FOR YOU ORDER')
//     ).toBeDisplayed();
//   }
// }

// }
async finishCheckout() {

  if (driver.isAndroid) {
    await $('android=new UiScrollable(new UiSelector().scrollable(true))' +
      '.scrollTextIntoView("FINISH")');

    await this.finishBtn.waitForDisplayed({ timeout: 10000 });
    await this.finishBtn.click();

  } else {
    // ✅ iOS SAFE SCROLL (BrowserStack compatible)
    await driver.execute('mobile: swipe', { direction: 'up' });

    // ✅ DO NOT use waitForDisplayed / isDisplayed
    expect(await this.finishBtn.isExisting()).toBe(true);

    await this.finishBtn.click();
  }
}

}


export default new CheckoutScreen()
