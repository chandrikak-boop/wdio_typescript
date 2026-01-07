import {config} from '../config/wdio.conf.ts';
  // ====================
    // Runner Configuration
    // ====================
    runner: 'local'
    config.port=4723,
   
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    config.capabilities = [{
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.0',
  'appium:udid': '2167BBA3-88FD-4ECB-BE11-524536EB951F',
  'appium:app': 'app/iOS/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app',
  'appium:noReset': true,
  'appium:newCommandTimeout': 300
}],
       //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

       config.services= [
  ['appium', {
    command: 'appium',
    args: {
      port: 4723,
      relaxedSecurity: true,
      sessionOverride: true
    }
  }]
]

export {config};