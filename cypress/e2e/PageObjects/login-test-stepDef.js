import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('user is on login page', function() {
    cy.visit("http://the-internet.herokuapp.com/login")
})


When('put login and password correctly', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
  });
  
  Then('user should be on main page', () => {
    cy.url().should('eq', 'http://the-internet.herokuapp.com/secure');
    cy.get('.example h2').should('contain.text', 'Secure Area');
  });