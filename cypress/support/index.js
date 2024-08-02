import "./commands";

// Ustawienia globalne
Cypress.config('defaultCommandTimeout', 10000)

// Globalne hooki
beforeEach(() => {
  cy.log('Running a new test...')
})

afterEach(() => {
  cy.log('Test finished.')
})


