describe("Loan application", () => {
  it("user should be able to set the amount and payment time", () => {
    cy.visit("https://www.mbank.pl");
    cy.url().should("include", "/indywidualny");
    cy.get("div.cookieConsent").shadow().contains('button', 'odrzuć').click()
    cy.get('a[href="/indywidualny/kredyty/"]').click();
    cy.contains("a", "Kredyty gotówkowe").click({ force: true });
    cy.url().should("include", "indywidualny/kredyty/kredyty-gotowkowe/");
    cy.get('input[class="kk_input"]').type("50000");
    cy.get('input[class="os_input"]').type("120")
    cy.contains("a", "Złóż wniosek").click();
    cy.xpath('(//div[contains(., "Jeszcze nie, ale chcę dołączyć")])[6]');
    cy.get('button', 'Wypełnij dane').click()
    cy.get("h3", "Ile pieniędzy potrzebujesz?").should("be.visible");
    cy.get('input[class="slider-input"]').should('have.value', '50000')

      
  });
});
