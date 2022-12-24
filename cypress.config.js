const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yvobr4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env: {
      first_name: "Mia",
      webdriver_uni_homepage: "https://webdriveruniversity.com"
    }
  }
});
