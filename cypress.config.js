// cypress.config.js
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

    
    },
    specPattern: [
      "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}", 
      "cypress/e2e/Features/*.feature"                      
    ],
    supportFile: "cypress/support/e2e.js" 
  }
});



// // cypress.config.js
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
//     supportFile: "cypress/support/index.js",
//     supportFile: "cypress/support/e2e.js",
//   },
// });

// const { defineConfig } = require('cypress');
// const preprocessor = require('cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', preprocessor());
//     },
//     specPattern: '**/*.feature'
//   },
// });

