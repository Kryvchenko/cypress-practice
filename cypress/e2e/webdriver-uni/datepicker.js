/// <reference types="Cypress" />

describe("Test datepicker via webdriver uni", () => {
  it("Select date via datepicker", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate()); // get current date i.e. 20
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date.getDate() + 5); // get current date i.e. 20 + 5  = 27
    // cy.log(date2.getDate());

    let date2 = new Date();
    date2.setDate(date2.getDate() + 5); // get current date i.e. 20 + 5  = 27

    let futureYear = date2.getFullYear();
    let futureMonth = date2.toLocaleString("default", { month: "long" });
    let futureDay = date2.getDate();
    cy.log(futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear && futureMonth)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        });
    }

    function selectDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectDay();
  });
});
