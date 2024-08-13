describe("Search Input Functionality", () => {
  it("should return search results", () => {
    cy.visit("https://www.mbank.pl");
    cy.get('a[aria-label="Szukaj w serwisie"]').type("kredyt{enter}");
    cy.url().should("include", "/szukaj");
    cy.contains("Pytania i odpowiedzi").should("be.visible"); 
  });
});
