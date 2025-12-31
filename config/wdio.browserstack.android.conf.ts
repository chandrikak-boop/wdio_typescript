import {config} from '../config/wdio.conf.ts';
// ====================
    // BrowserStack Configuration
    // ====================

 config.user=process.env.BROWSERSTACK_USER
 config.key=process.env.BROWSERSTACK_KEY
    config.specs = [
            '../test/specs/swag_e2e.android.spec.ts'
        ]
   
    config.capabilities= [{
  platformName: 'android',            // ✅ NO appium:
  'appium:deviceName': 'Google Pixel 9',
  'appium:platformVersion': '16.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app':'bs://275bbf382fad5ab513803cedde0393e4683d6c90',
  'appium:autoGrantPermissions': true
}]
       //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services= ['browserstack']
export { config };