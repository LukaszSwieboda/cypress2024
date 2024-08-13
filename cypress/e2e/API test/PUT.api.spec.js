describe("PUT request API Tests", () => {
  it("PUT - should update a user", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/users/1", {
      name: "Jane Doe updated",
    }).should((response) => {
      // Asercja statusu
      expect(response.status).to.eq(200);
      // Asercja zmienionej wartości
      expect(response.body).to.have.property("name", "Jane Doe updated");
    });
  });
});
