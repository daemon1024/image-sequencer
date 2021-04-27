module.exports = {
  globalSetup: './test/ui-2/puppeteer-config/setup.js',
  globalTeardown: './test/ui-2/puppeteer-config/teardown.js',
  testEnvironment: './test/ui-2/puppeteer-config/puppeteer_environment.js',
  testRegex: './ColorPicker\\.test\\.js$',
  verbose: true,
};