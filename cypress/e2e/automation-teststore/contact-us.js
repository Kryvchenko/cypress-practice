//require("cypress-xpath");
/// <reference types="cypress" />

describe("Test contact us page via automation store", () => {
  it.only("should be able to submit a successfull submition via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function (contactText) {
        console.log(`Selected the following item ${contactText.text()}`);
      });
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("Oleks");
    cy.get("#ContactUsFrm_email").type("oleks@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type("I have car rentals");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
