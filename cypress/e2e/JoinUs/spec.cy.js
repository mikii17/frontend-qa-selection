describe("Join Us Tests", () => {
  context("Desktop Viewport (1200 X 800)", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });
    /* ==== Test Created with Cypress Studio ==== */
    it("Checks join us flow on Desktop", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click();
      cy.get(".pt-8 > :nth-child(2)").should("have.text", " Enter your email ");
      cy.get(".mb-8 > :nth-child(1) > .text-white").should(
        "have.text",
        "Continue with Google"
      );
      cy.get(".mb-8 > :nth-child(2) > .text-white").should(
        "have.text",
        "Continue with Facebook"
      );
      cy.get(".mb-8 > :nth-child(3)").should(
        "have.text",
        "Continue with Apple"
      );
      cy.get(".px-4 > .group > .h-full").clear("m");
      cy.get(".px-4 > .group > .h-full").type("mic");
      cy.get(".px-4 > .group > .absolute").should(
        "have.text",
        "Invalid email address"
      );
      cy.get(".px-4 > .group > .h-full").clear("mich");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail");
      cy.get(".px-4 > .group > .absolute").should(
        "have.text",
        "Invalid email address"
      );
      cy.get(".px-4 > .group > .h-full").clear("michaelgashaw@gmail.");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".pt-8 > .px-4").click();
      cy.get(".px-4 > .group > .h-full").clear("michaelgashaw@gmail.");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      cy.get(".gap-6 > :nth-child(2)").should(
        "have.text",
        " Nice to meet you,  Upload a profile picture  and complete your  presentation "
      );
      /* ==== End Cypress Studio ==== */
    });
  });

  context("Mobile Viewport (400, 800)", () => {
    beforeEach(() => {
      cy.viewport(400, 800); // Mobile viewport
      cy.visit("/");
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks join us flow on Mobile", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click();
      cy.get(".pt-8 > :nth-child(2)").should("have.text", " Enter your email ");
      cy.get(".mb-8 > :nth-child(1) > .text-white").should(
        "have.text",
        "Continue with Google"
      );
      cy.get(".mb-8 > :nth-child(2) > .text-white").should(
        "have.text",
        "Continue with Facebook"
      );
      cy.get(".mb-8 > :nth-child(3) > .text-white").should(
        "have.text",
        "Continue with Apple"
      );
      cy.get(".px-4 > .group > .h-full").clear("mi");
      cy.get(".px-4 > .group > .h-full").type("michael");
      cy.get(".px-4 > .group > .absolute").should(
        "have.text",
        "Invalid email address"
      );
      cy.get(".px-4 > .group > .h-full").clear("michaelga");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail");
      cy.get(".px-4 > .group > .absolute").should(
        "have.text",
        "Invalid email address"
      );
      cy.get(".px-4 > .group > .h-full").clear("michaelgashaw@gmail.");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gap-6 > :nth-child(2) > .text-xs").should(
        "have.text",
        " Upload a profile picture  and complete your  presentation "
      );
      cy.get(".gap-6 > :nth-child(2) > .mb-1").should(
        "have.text",
        " Nice to meet you, "
      );
      /* ==== End Cypress Studio ==== */
    });
  });
});
