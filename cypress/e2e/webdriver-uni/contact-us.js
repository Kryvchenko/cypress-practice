/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import ContactUsPage_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";

describe("Test contact us page via webdriveruniversity", () => {
  const homepage_PO = new HomePage_PO();
  const contactuspage_PO = new ContactUsPage_PO();
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    homepage_PO.visitHomePage();
    homepage_PO.clickOnContactUsBtn();
    /* Same task could be implemented using custom commands like in example below */
    // cy.visit("/");
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
  it("should be able to submit a successfull submition via sub/form", () => {
    /* See below 3 examples of web-page assertions */
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contact");

    contactuspage_PO.ContactFormSubmition(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      data.message,
      "h1",
      "Thank You for your Message!"
    );
    /* Same task could be implemented using custom commands like in example below */
    // cy.webUniContactFormSubmition(
    //   Cypress.env("first_name"),
    //   data.last_name,
    //   data.email,
    //   data.message,
    //   "h1",
    //   "Thank You for your Message!"
    // );
  });
  it("should not be able to submit a successfull submition via sub/form ass all field are required", () => {
    contactuspage_PO.ContactFormSubmition(
      data.first_name,
      data.last_name,
      " ",
      data.message,
      "body",
      "Error: Invalid email address"
    );
    /* Same task could be implemented using custom commands like in example below */
    // cy.webUniContactFormSubmition(
    //   data.first_name,
    //   data.last_name,
    //   " ",
    //   data.message,
    //   "body",
    //   "Error: Invalid email address"
    // );
  });
});
