import {config} from '../config/wdio.conf.ts';
  // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.

  runner: 'local'
  config.port=4723,
  config.capabilities=[{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Pixel 9',
  'appium:platformVersion': '16.0',
  'appium:app': 'app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk' ,
  'appium:autoGrantPermissions': true,
  'appium:appWaitActivity': '*'
}],
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
       //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

export {config};