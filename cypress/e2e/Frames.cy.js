import "cypress-iframe";
describe("Frames", () => {
  it.only("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    cy.get(".tox-icon").click();
    iframe.clear().type("Welcome {cmd+a}");
  });

  it.skip("Approach2 by using custom commands", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.getIFrame("#mce_0_ifr").clear().type("Welcome {cmd+a}");
    cy.get("[aria-label='Bold']").click();
  });

  it.skip("Approach3 by using cypress-iframe plugin ", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); // load the frame
    cy.iframe("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").clear().type("Welcome");
  });
});
