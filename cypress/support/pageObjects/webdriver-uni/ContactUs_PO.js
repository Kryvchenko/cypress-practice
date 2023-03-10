class ContactUsPage_PO {
  ContactFormSubmition(
    firstName,
    lastName,
    email,
    message,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(message);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
  }
}

export default ContactUsPage_PO;
