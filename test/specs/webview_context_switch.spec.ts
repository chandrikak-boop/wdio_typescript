import LoginScreen from '../pageobjects/LoginScreen';

describe('Swag Labs E2E', () => {

  it('switch contexts and interact with web page', async () => {

    // ---------- LOGIN ----------
    await LoginScreen.login(
      process.env.USER_NAME!,
      process.env.PASSWORD!
    );

    // ---------- OPEN ABOUT ----------
    const menuBtn = await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView');
    await menuBtn.waitForDisplayed({ timeout: 10000 });
    await menuBtn.click();

    await $('~test-ABOUT').click();
    await driver.pause(1000)
    // ---------- CLICK NATIVE SIGN-UP BUTTON ----------
    const nativeSignUpBtn = $('//android.widget.Button[@text="Sign up for free"]');
    await nativeSignUpBtn.waitForDisplayed({ timeout: 15000 });
    await nativeSignUpBtn.click();

    // ---------- WAIT FOR WEBVIEW ----------
    await browser.waitUntil(async () => {
      const contexts = await browser.getContexts();
      return contexts.toString().includes('WEBVIEW_chrome');
    }, {
      timeout: 20000,
      timeoutMsg: 'WEBVIEW_chrome not available'
    });

    // ---------- SWITCH TO WEB CONTEXT ----------
    await browser.switchContext('WEBVIEW_chrome');

    // ---------- WAIT FOR PAGE LOAD ----------
    await browser.waitUntil(async () => {
      const url = await browser.getUrl();
      return url.includes('saucelabs.com');
    }, {
      timeout: 20000,
      timeoutMsg: 'SauceLabs page did not load'
    });
    console.log(await browser.getUrl());
    console.log(await browser.getContext());


    // ---------- WEB INTERACTION ----------
    const signUpWithEmail = await $("//*[contains(text(),'Sign up with Google')]");
    await signUpWithEmail.waitForClickable({ timeout: 15000 });
    await signUpWithEmail.click();

    const emailInput = await $('*[type="email"]');
    await emailInput.waitForDisplayed({ timeout: 15000 });
    await emailInput.addValue('testuser@gmail.com');
    
    console.log(await browser.getContexts());
    await browser.switchContext('NATIVE_APP')


});
  after(async () => {
    console.log('All tests finished in this spec');
    await driver.terminateApp('com.swaglabsmobileapp');

  });
 
})


