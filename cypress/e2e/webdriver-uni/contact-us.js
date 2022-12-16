/// <reference types="Cypress" />

describe("Test contact us page via webdriveruniversity", () => {
  it("should be able to submit a successfull submition via sub/form", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contact");
    //cy.get("#contact-us").click({ force: true });
    //cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Shmoe");
    cy.get('[name="email"]').type("smoe@gmail.com");
    cy.get("textarea.feedback-input").type("I love Cypress");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("should not be able to submit a successfull submition via sub/form ass all field are required", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    //cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Shmoe");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
