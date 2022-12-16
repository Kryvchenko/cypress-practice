/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Validate an amount of elements with specific class", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbNail");
    cy.get("@productThumbNail").should("have.length", 16);
    cy.get("@productThumbNail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  let itemsTotal = 0;
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".thumbnail").as("productThumbNail");
    // cy.get("@productThumbNail")
    //   .find(".oneprice")
    //   .each((el) => {
    //     cy.log(el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    cy.get("@itemPrice").then(($linkText) => {
      let itemPriceTotal = $linkText
        .split("$")
        .map((el) => Number(el))
        .reduce((acc, cur) => acc + cur);
      itemsTotal += itemPriceTotal;
      cy.log(`Items price total: ${itemPriceTotal}`);
    });
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let itemSaleTotal = $linkText
          .split("$")
          .map((el) => Number(el))
          .reduce((acc, cur) => acc + cur);
        itemsTotal += itemSaleTotal;
        cy.log(`Items sale total: ${itemSaleTotal}`);
      })
      .then(() => expect(itemsTotal).to.eq(625.6));
  });
});
