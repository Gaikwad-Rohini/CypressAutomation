describe("XPathLocators", () => {
  it("find no of products", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get(".product_list.grid.row").should("have.length", 1);
  });
});
