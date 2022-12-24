class AutoStore_HomePage_PO {
  accessHomePage() {
    cy.visit("https://automationteststore.com/", { timeout: 60000 });
  }
  clickOnHaircareLink() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}

export default AutoStore_HomePage_PO;
