describe("XPathLocators", () => {
  it("find no of products", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get(".top-pagination-content.clearfix").should("have.length", 7);
  });
});
