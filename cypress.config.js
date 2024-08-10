// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/index.js",
    supportFile: "cypress/support/e2e.js",
  },
});
