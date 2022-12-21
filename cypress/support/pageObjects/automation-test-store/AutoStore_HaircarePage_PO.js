class AutoStore_HaircarePage_PO {
  addHaircareProductsToBasket() {
    globalThis.data.productName.map((el) => cy.addProductToBasket(el));
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default AutoStore_HaircarePage_PO;
