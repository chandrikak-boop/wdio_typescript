class LoginScreen {

  get username() {
    return $('~test-Username');
  }

  get password() {
    return $('~test-Password');
  }

  get loginBtn() {
    return $('~test-LOGIN');
  }

  async typeUsername(value: string) {
    await this.username.waitForDisplayed();

    await this.username.clearValue();

    if (driver.isIOS) {
      // iOS SAFE TYPING
      for (const char of value) {
        await this.username.addValue(char);
        //await driver.pause(10); // CRITICAL
      }
    } else {
      // Android
      await this.username.setValue(value);
    }
  }

  async typePassword(value: string) {
    await this.password.waitForDisplayed();
    await this.password.clearValue();

    if (driver.isIOS) {
      for (const char of value) {
        await this.password.addValue(char);
      //  await driver.pause(1);
      }
    } else {
      await this.password.setValue(value);
    }
  }

  async login(username: string, password: string) {
    await this.typeUsername(username);
    await this.typePassword(password);
    await this.loginBtn.click();
    await driver.pause(2000)
  }
}
export default new LoginScreen();