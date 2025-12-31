import { config } from './wdio.conf'

// ====================
// BrowserStack Credentials
// ====================
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

// ====================
// Specs
// ====================
config.specs = [
  '../test/specs/swag_e2e.spec.ts'
]

// ====================
// Capabilities
// ====================
config.capabilities = [
  {
    platformName: 'ios',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16',
    'appium:automationName': 'XCUITest',
    'appium:app': 'bs://b6ab26f95f322e4a8603aa4393177920f27e9e75',
    'appium:autoGrantPermissions': true
  }
]

// ====================
// Services
// ====================
// ⛔ NO observability key at all
config.services = [
  ['browserstack',{}]
]

export { config }
