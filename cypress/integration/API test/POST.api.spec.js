describe("POST request API Tests", () => {
  it("POST - should create a new user", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/users", {
      id: "1",
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
    }).should((response) => {
      // Asercja statusu
      expect(response.status).to.eq(201);
      // Asercja struktury odpowiedzi
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name", "John Doe");
      expect(response.body).to.have.property("username", "johndoe");
      expect(response.body).to.have.property("email", "john@example.com")
    });
  });
});
