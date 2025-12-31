import { config as base } from './wdio.conf'

export const config = {
  ...base,

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,

  protocol: 'https',
  hostname: 'hub.browserstack.com',
  port: 443,
  path: '/wd/hub',

  specs: ['../test/specs/**/*.ts'],

  // 🚫 NO browserstack service for mobile
  services: [],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 8',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',

    'appium:app': 'bs://275bbf382fad5ab513803cedde0393e4683d6c90',
    'appium:appWaitActivity': '*',
    'appium:appWaitDuration': 60000,
    'appium:newCommandTimeout': 300
  }]
}
