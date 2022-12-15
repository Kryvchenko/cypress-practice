//require("cypress-xpath");
/// <reference types="cypress" />

describe("Verifying variables, cypress commands, and jquery commands", () => {
  it("Navigate to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    // This approach wan't work

    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // makeupLink.click();
    // skincareLink.click();

    // This approach will work

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });
  it("Navigate to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    cy.get("h1 .maintext").then(($headeText) => {
      const headerText = $headeText.text();
      cy.log(`Found header text: ${headerText}`);
      expect(headerText).is.eq("Makeup");
    });
  });
  it("Navigate to specific product pages", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //jquery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const textField = text.find("#field_11").text();
      expect(textField).to.contain("First name");
    });

    //embedded commans (closure)
    cy.get("#field_11").then((fnText) => {
      cy.log(fnText.text());
      cy.log(fnText);
    });
  });
});
