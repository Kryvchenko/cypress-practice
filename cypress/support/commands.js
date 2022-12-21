// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});
Cypress.Commands.add("navigateToWebDriverUniBaseUrl", () => {
  cy.visit("/");
});
Cypress.Commands.add("navigateToWebDriverUniCheckBoxesPage", () => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});
Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get(".productcart").eq(index).click();
    }
  });
});

Cypress.Commands.add(
  "webUniContactFormSubmition",
  (firstName, lastName, email, message, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(message);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
  }
);
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
