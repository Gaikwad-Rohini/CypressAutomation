describe("Mouse Operations", () => {
  it.skip("MouseHover", () => {
    cy.visit("https://demo.opencart.com/");

    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible");

    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();

    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });

  it.only("Right Click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    //Approach1
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get(".context-menu-icon-copy > span").should("be.visible");

    //Approach2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-copy > span").should("be.visible");
  });

  it("Double Click", () => {});
});
