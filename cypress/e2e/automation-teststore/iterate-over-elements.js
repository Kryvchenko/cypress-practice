/// <reference types="cypress" />

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific item to basket", () => {
    cy.selectProduct("Curls To straight Shampoo");
  });
  it("Add another specific item to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
});
