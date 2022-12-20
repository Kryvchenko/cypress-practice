/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    const userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1  td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        userDetails.map((el) => {
          if (Number(el)) {
            numb += Number(el);
          }
        });
        expect(numb).to.eq(322);
      });
  });
  it("Should be able to find user age with a last name", () => {
    cy.get("#thumbnail-1  tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1  tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
      }
    });
  });
});
