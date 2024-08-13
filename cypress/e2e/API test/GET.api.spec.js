describe("GET request API Tests", () => {
  it("GET - should fetch list of users", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users").should(
      (response) => {
        // Asercja statusu
        expect(response.status).to.eq(200);
        // Asercja typu danych odpowiedzi
        expect(response.body).to.be.an("array");
        // Asercja na długość tablicy
        expect(response.body).to.have.length.greaterThan(0);
        // Asercja pierwszego elementu
        expect(response.body[1]).to.have.property("name");
      }
    );
  });
});
