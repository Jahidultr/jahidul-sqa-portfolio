const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    reportTitle: "SteamStore Test Report",
    reportPageTitle: "Cypress Test Results",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "https://store.steampowered.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    testIsolation: false,
    setupNodeEvents(on, config) { },
  },
});