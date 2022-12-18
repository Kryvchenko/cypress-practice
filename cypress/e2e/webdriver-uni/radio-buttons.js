/// <reference types="Cypress" />

describe("Verify radio-buttons for webdriver-uni", () => {
  it("Should allow to check specific radio buttons", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(2).check();
  });
  it("Validate a state of specific radio buttons", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");

    cy.get("[value='cabbage']").should("be.disabled");
  });
});
