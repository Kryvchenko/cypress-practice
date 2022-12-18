/// <reference types="Cypress" />

describe("Interact with autocomplete dropdown list via webdriver-uni", () => {
  it("Should allow to select specific value from dropdown list", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
