import "cypress-xpath";

describe("Password Recovery Tests", () => {
  context("Desktop Viewport (1200 X 800)", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks password recovery flow on Desktop", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click();
      cy.get(".px-4 > .group > .h-full").clear("mi");
      cy.get(".px-4 > .group > .h-full").type("michael12gashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      cy.get(".mb-2").should("have.text", " Add a new password ");
      cy.get(".flex-1 > .text-13").should(
        "have.text",
        " Your account uses google Sign-in.  Add a new password. "
      );
      cy.get(".leading-none > .text-xs").should(
        "have.text",
        "michael12gashaw@gmail.com"
      );
      cy.get(".leading-none > .text-sm").should(
        "have.text",
        " Recovery link sent to: "
      );
      cy.get(".relative > .gradient").should("be.visible");
      /* ==== End Cypress Studio ==== */
    });
  });

  context("Mobile Viewport (400, 800)", () => {
    beforeEach(() => {
      cy.viewport(400, 800); // Mobile viewport
      cy.visit("/");
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks password recovery flow on Mobile", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click();
      cy.get(".px-4 > .group > .h-full").clear("mi");
      cy.get(".px-4 > .group > .h-full").type("michael12gashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      cy.get(".mb-2").should("have.text", " Add a new password ");
      cy.get(".flex-1 > .text-13").should(
        "have.text",
        " Your account uses google Sign-in.  Add a new password. "
      );
      cy.get(".-mt-20 > .z-10 > .h-full").click();
      cy.get(".leading-none > .text-sm").should(
        "have.text",
        " Recovery link sent to: "
      );
      cy.get(".leading-none > .text-xs").should(
        "have.text",
        "michael12gashaw@gmail.com"
      );
      cy.get(".relative > .gradient").should("be.visible");
      /* ==== End Cypress Studio ==== */
    });
  });
});
