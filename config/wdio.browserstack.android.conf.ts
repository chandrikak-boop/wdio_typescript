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
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 8',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',

    'appium:app': 'bs://<ANDROID_APP_ID>',
    'appium:appWaitActivity': '*',
    'appium:appWaitDuration': 60000,
    'appium:newCommandTimeout': 300
  }]
}
