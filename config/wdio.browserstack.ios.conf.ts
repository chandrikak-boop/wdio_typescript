import {config} from './wdio.conf.ts';
// ====================
    // BrowserStack Configuration
    // ====================

 config.user=process.env.BROWSERSTACK_USER
 config.key=process.env.BROWSERSTACK_KEY
    config.specs = [
            '../test/specs/swag_e2e.spec.ts'
        ]
   
    config.capabilities= [{
  platformName: 'ios',            // ✅ NO appium:
  'appium:deviceName': 'iPhone 14 Pro Max',
  'appium:platformVersion': '16',
  'appium:automationName': 'XCUITest',
  'appium:app':'bs://b6ab26f95f322e4a8603aa4393177920f27e9e75',
  'appium:autoGrantPermissions': true
}]


       //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services= ['browserstack']
export { config };