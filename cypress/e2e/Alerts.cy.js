describe("Alerts", () => {
  it("JS alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });

    //alert window automatically closed by cypress

    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("JS confirm alert Ok", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    // cypress automatically closed alert window by using ok button-default

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("JS confirm alert Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // cypress closed alert window by using cancel button

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("JS Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();

    //cypress will automatically close prompted alert- it will use ok button - by default
    //cy.on("window:prompt", () => false);
    cy.get("#result").should("have.text", "You entered: welcome");
  });

  it("Authenticated alert", () => {
    //approach1
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", {
    //   auth: {
    //     username: "admin",
    //     password: "admin",
    //   },
    // });

    // cy.get("div[class='example'] p").should("have.contain", "Congratulations");

    //approach 2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });
});
