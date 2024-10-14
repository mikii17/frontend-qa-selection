describe("SignUp Tests", () => {
  context("Desktop Viewport (1200 X 800)", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks sign up flow on Desktop", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click({ force: true });
      cy.get(".group > .relative").click({ force: true });
      cy.get(".px-4 > .group > .h-full").clear();
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click({ force: true });

      cy.get(".next-icon").should("have.text", " Back to Log in ");
      cy.get(".next-icon").should("be.visible");
      cy.get(".gap-6 > :nth-child(2) > .mb-1").should(
        "have.text",
        " Nice to meet you, "
      );
      cy.get(".gap-6 > :nth-child(2) > .mb-1").should("be.visible");
      cy.get(".flex-row > .flex > .fa-solid").should("be.visible");
      cy.get(".flex-col > .gap-2 > div.text-white").should(
        "have.text",
        " I accept  Terms & Conditions  and  Privacy Policy "
      );
      cy.get(".flex-col > .gap-2 > div.text-white").click({ force: true });
      cy.get(".flex-col > .gap-2 > div.text-white").should("be.visible");

      cy.get(".mb-4.text-center").should("have.text", " Enter your details ");
      cy.get(":nth-child(4) > .group > .h-full").clear();

      cy.get(":nth-child(4) > .group > .h-full").type("m");
      cy.get(":nth-child(4) > .group > .h-full").clear();

      cy.get(":nth-child(4) > .group > .absolute").should(
        "have.text",
        "(*) Required"
      );
      cy.get(":nth-child(4) > .group > .h-full").type("michael");

      cy.get(":nth-child(5) > .group > .h-full").type("gashaw");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("pass");
      cy.get(".-bottom-6").should("have.text", "8 characters minimum");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("password");
      cy.get(".-bottom-6").should("have.text", "At least one uppercase letter");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("passworD@123");

      cy.get(":nth-child(9) > .group > .h-full").clear("");
      cy.get(":nth-child(9) > .group > .h-full").type("passwor");

      cy.get(".-bottom-6").should("have.text", "Passwords do not match");
      cy.get(":nth-child(9) > .group > .h-full").clear("");
      cy.get(":nth-child(9) > .group > .h-full").type("passworD@123");

      cy.get(".px-3 > .gradient").click({ force: true });
      cy.get(".text-red-500").should("have.class", "text-red-500");

      /* ==== End Cypress Studio ==== */
    });
  });

  context("Mobile Viewport (400, 800)", () => {
    beforeEach(() => {
      cy.viewport(400, 800); // Mobile viewport
      cy.visit("/");
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks sign up flow on Mobile", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".group > .relative").click({ force: true });
      cy.get(".group > .relative").click({ force: true });
      cy.get(".px-4 > .group > .h-full").clear();
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click({ force: true });

      cy.get(".next-icon").should("have.text", " Back to Log in ");
      cy.get(".next-icon").should("be.visible");
      cy.get(".gap-6 > :nth-child(2) > .mb-1").should(
        "have.text",
        " Nice to meet you, "
      );
      cy.get(".gap-6 > :nth-child(2) > .mb-1").should("be.visible");
      cy.get(".flex-row > .flex > .fa-solid").should("be.visible");
      cy.get(".flex-col > .gap-2 > div.text-white").should(
        "have.text",
        " I accept  Terms & Conditions  and  Privacy Policy "
      );
      cy.get(".flex-col > .gap-2 > div.text-white").click({ force: true });
      cy.get(".flex-col > .gap-2 > div.text-white").should("be.visible");

      cy.get(".mb-4.text-center").should("have.text", " Enter your details ");
      cy.get(":nth-child(4) > .group > .h-full").clear();

      cy.get(":nth-child(4) > .group > .h-full").type("m");
      cy.get(":nth-child(4) > .group > .h-full").clear();

      cy.get(":nth-child(4) > .group > .absolute").should(
        "have.text",
        "(*) Required"
      );
      cy.get(":nth-child(4) > .group > .h-full").type("michael");

      cy.get(":nth-child(5) > .group > .h-full").type("gashaw");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("pass");
      cy.get(".-bottom-6").should("have.text", "8 characters minimum");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("password");
      cy.get(".-bottom-6").should("have.text", "At least one uppercase letter");

      cy.get(".group.mb-1 > .group > .h-full").clear();
      cy.get(".group.mb-1 > .group > .h-full").type("passworD@123");

      cy.get(":nth-child(9) > .group > .h-full").clear("");
      cy.get(":nth-child(9) > .group > .h-full").type("passwor");

      cy.get(".-bottom-6").should("have.text", "Passwords do not match");
      cy.get(":nth-child(9) > .group > .h-full").clear("");
      cy.get(":nth-child(9) > .group > .h-full").type("passworD@123");

      cy.get(".px-3 > .gradient").click({ force: true });
      cy.get(".text-red-500").should("have.class", "text-red-500");

      /* ==== End Cypress Studio ==== */
    });
  });
});
