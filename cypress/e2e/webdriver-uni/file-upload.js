/// <reference types="Cypress" />

describe("Test file functionality via webdriveruniversity", () => {
  it("should be able to upload file via upload input", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });
  it("should be able to upload no-file via upload input", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).is.eq("You need to select a file to upload!");
    });
  });
});
