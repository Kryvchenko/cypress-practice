/// <reference types="Cypress" />

describe("Test mouse actions", () => {
  it("Scroll into view", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Should be able to drag and drop item", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("Should be able to double-click", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click").dblclick();
  });
  it.only("Should be able hold mouse click on element", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
