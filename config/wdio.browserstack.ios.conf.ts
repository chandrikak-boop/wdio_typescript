import { config as base } from './wdio.conf'

export const config = {
  ...base,

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,

  specs: ['../test/specs/**/*.ts'],

  services: [
    ['browserstack', { observability: false }]
  ] as const,

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:platformVersion': '16',
    'appium:automationName': 'XCUITest',

    'appium:app': 'bs://<IOS_APP_ID>',
    'appium:newCommandTimeout': 300
  }]
}
