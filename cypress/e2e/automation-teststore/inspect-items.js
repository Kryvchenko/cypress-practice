//require("cypress-xpath");
/// <reference types="cypress" />

describe("Inspect automation store items with chaining commands", () => {
  it.only("should be able to select specific item", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itetHeaderText) {
        console.log(`Selected the following item ${itetHeaderText.text()}`);
      });
  });
  it("should be able to click on 1 items using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
    cy.log("Test has been completed");
  });
});
