describe("Home Page Tests", () => {
  context("Desktop Viewport (1200 X 800)", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });
    /* ==== Test Created with Cypress Studio ==== */
    it("Checks existence of components in Home Page On Desktop", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit("/");
      cy.get(".gap-4 > .flex > .fa-solid").should("be.visible");
      cy.get(".text-6xl").should("have.text", " E-learing Revolution 2 ");
      cy.get(".inline-block").should("be.visible");
      cy.get(".group > .relative").should("have.text", " Join Us");
      cy.get(".z-10 > .group > .h-full").should("be.visible");
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".z-10 > .group > .h-full").should("be.enabled");
      /* ==== End Cypress Studio ==== */
    });
  });

  context("Mobile Viewport (400, 800)", () => {
    beforeEach(() => {
      cy.viewport(400, 800); // Mobile viewport
      cy.visit("/");
    });
    /* ==== Test Created with Cypress Studio ==== */

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks existence of components in Home Page On Mobile", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gap-4 > .flex > .fa-solid").should("be.visible");
      cy.get(".text-6xl").should("have.text", " E-learing Revolution 2 ");
      cy.get(".inline-block").should("be.visible");
      cy.get(".group > .relative").should("have.text", " Join Us");
      cy.get("#search > .z-10").should("be.visible");
      cy.get(".z-10 > .group > .h-full").should("be.visible");
      cy.get(".z-10 > .group > .h-full").should("be.enabled");
      /* ==== End Cypress Studio ==== */
    });
  });
});
