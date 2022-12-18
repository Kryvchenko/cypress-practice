/// <reference types="Cypress" />

describe("Interact with drop-down-list via webdriver-uni", () => {
  it("Should allow to select specific value from dropdown list", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").as("dropdown-2");
    cy.get("@dropdown-2").select("testng").should("have.value", "testng");
    cy.get("@dropdown-2").select("TestNG").contains("TestNG");
    cy.get("@dropdown-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-3").select("jquery").contains("JQuery");
  });
});
