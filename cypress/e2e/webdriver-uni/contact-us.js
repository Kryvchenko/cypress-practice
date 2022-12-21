/// <reference types="Cypress" />

describe("Test contact us page via webdriveruniversity", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
  it("should be able to submit a successfull submition via sub/form", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contact");
    cy.webUniContactFormSubmition(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      data.message,
      "h1",
      "Thank You for your Message!"
    );
  });
  it("should not be able to submit a successfull submition via sub/form ass all field are required", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.webUniContactFormSubmition(
      data.first_name,
      data.last_name,
      " ",
      data.message,
      "body",
      "Error: Invalid email address"
    );
  });
});
