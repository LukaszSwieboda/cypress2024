// cypress/integration/sample-test.spec.js
describe("Sample Test", () => {
  it("should visit the homepage", () => {
    cy.visit("https://example.com");
    cy.title().should("include", "Example Domain");
  });
});
