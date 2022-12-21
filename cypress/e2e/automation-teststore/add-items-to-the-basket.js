/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific item to basket", () => {
    globalThis.data.productName.map((el) => cy.addProductToBasket(el));
    cy.get(".dropdown-toggle > .fa").click();
  });
});
