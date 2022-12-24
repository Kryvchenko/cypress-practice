//require("cypress-xpath");
/// <reference types="cypress" />

describe("Test contact us page via automation store", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  before(() => {
    cy.fixture("user-datails").as("user");
  });
  it("should be able to submit a successfull submition via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function (contactText) {
        console.log(`Selected the following item ${contactText.text()}`);
      });
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
      cy.get("#ContactUsFrm_enquiry").type(user.message);
    });

    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
