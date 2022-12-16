/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log in information of all haircare products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific item to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
      if ($el.text().includes("Curls To straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
