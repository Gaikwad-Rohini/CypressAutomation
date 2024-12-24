describe("Verify the website url", () => {
  it("verify title-positive", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title-negative test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("not.eq", "OrangeHRM123");
  });
});
