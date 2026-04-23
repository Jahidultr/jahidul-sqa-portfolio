const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    reportTitle: "OrangeHRM Test Report",
    reportPageTitle: "Cypress Test Results",
  },

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) { },
  },
});