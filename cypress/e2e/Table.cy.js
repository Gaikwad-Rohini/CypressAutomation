describe("handle tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("");
    cy.get("#input-password").type("");
    cy.get("button[type='submit']").click();

    // cy.get(".btn-close").click();

    cy.get("#menu-customer>a").click(); // customers main menu

    cy.get("#menu-customer>ul>li:first-child").click(); // customers sub/child item
  });

  it(" Check number of rows and columns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );

    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7");
  });
});
