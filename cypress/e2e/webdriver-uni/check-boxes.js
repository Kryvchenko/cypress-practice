/// <reference types="Cypress" />

describe("Verify check-boxes for webdriver-uni", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Should allow to check check-box", () => {
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(1) > input").as("option1");
    cy.get("@option1").check().should("be.checked");
  });
  it("Should allow to uncheck check-box", () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("option3");
    cy.get("@option3").uncheck().should("not.be.checked");
  });
  it("Should allow to check multiple check-boxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
