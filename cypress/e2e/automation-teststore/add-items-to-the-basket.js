/// <reference types="cypress" />
import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";
import AutoStore_HaircarePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HaircarePage_PO";

describe("Add multiple items to basket", () => {
  const autostore_homepage_PO = new AutoStore_HomePage_PO();
  const autostore_haircarepage_PO = new AutoStore_HaircarePage_PO();
  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    autostore_homepage_PO.accessHomePage();
    autostore_homepage_PO.clickOnHaircareLink();

    /* Same logic but whithout abstraction and pom */
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific item to basket", () => {
    autostore_haircarepage_PO.addHaircareProductsToBasket();

    /* Same logic but whithout abstraction and pom */
    // globalThis.data.productName.map((el) => cy.addProductToBasket(el));
    // cy.get(".dropdown-toggle > .fa").click();
  });
});
