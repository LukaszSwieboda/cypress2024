describe("DELETE request API Tests", () => {
  it("DELETE - should delete a user", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/users/1").should(
      (response) => {
        // Asercja statusu
        expect(response.status).to.eq(200);
      }
    );
  });
});
