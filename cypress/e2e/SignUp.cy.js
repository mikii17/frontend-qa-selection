import "cypress-xpath";

describe("Sign Up Tests", () => {
  context("Desktop Viewport (1200 X 800)", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });

    /* ==== Test Created with Cypress Studio ==== */
    it("Checks sign up flow on Desktop", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit("http://localhost:3000/");
      cy.get(":nth-child(3) > :nth-child(1) > .group").click();
      cy.get(".px-4 > .group > .h-full").clear("m");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      cy.get(".next-icon").should("have.text", " Back to Log in ");
      cy.get(".flex-col > .gap-2 > div.text-white").should(
        "have.text",
        " I accept  Terms & Conditions  and  Privacy Policy "
      );
      cy.get(".flex-row > .flex > .fa-solid").should("be.visible");
      cy.get(":nth-child(4) > .group > .h-full").should("be.enabled");
      cy.get(":nth-child(5) > .group > .h-full").should("be.enabled");
      cy.get(".group.mb-1 > .group > .h-full").should("be.enabled");
      cy.get(".bg-\\[\\#A8A8A8\\] > .h-full").should("be.enabled");
      cy.get(":nth-child(9) > .group > .h-full").should("be.enabled");
      cy.get(".group.mb-1 > .group > .absolute").should("be.visible");
      cy.get(":nth-child(9) > .group > .absolute").should("be.visible");
      cy.get(":nth-child(4) > .group > .h-full").clear("H");
      cy.get(":nth-child(4) > .group > .h-full").clear("M");
      cy.get(":nth-child(4) > .group > .h-full").type("Michael");
      cy.get(":nth-child(5) > .group > .h-full").clear("G");
      cy.get(":nth-child(5) > .group > .h-full").clear("G");
      cy.get(":nth-child(5) > .group > .h-full").type("Gashaw");
      cy.get(".group.mb-1 > .group > .h-full").clear("P");
      cy.get(".group.mb-1 > .group > .h-full").type("P");
      cy.get(".-bottom-6").should("have.text", "8 characters minimum");
      cy.get(".group.mb-1 > .group > .h-full").clear("p");
      cy.get(".group.mb-1 > .group > .h-full").type("password");
      cy.get(".-bottom-6").should("have.text", "At least one uppercase letter");
      cy.get(".group.mb-1 > .group > .h-full").clear("passwordP");
      cy.get(".group.mb-1 > .group > .h-full").type("passwordP");
      cy.get(".group.mb-1 > .group > .h-full").clear("passwordP@");
      cy.get(".group.mb-1 > .group > .h-full").type("passwordP@ssw0rd");
      cy.get(":nth-child(9) > .group > .h-full").clear("p");
      cy.get(":nth-child(9) > .group > .h-full").type("pa");
      cy.get(".-bottom-6").should("have.text", "Passwords do not match");
      cy.get(":nth-child(9) > .group > .h-full").clear("pas");
      cy.get(":nth-child(9) > .group > .h-full").type("passwordP@ssw0rd");
      cy.get(".flex-row > .flex > .fa-solid").click();
      cy.get(".px-3 > .gradient").click();
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
      cy.get(".group > .relative").click();
      cy.get(".px-4 > .group > .h-full").clear("mi");
      cy.get(".px-4 > .group > .h-full").type("michaelgashaw@gmail.com");
      cy.get(".px-3 > .gradient").click();
      cy.get(".next-icon").should("have.text", " Back to Log in ");
      cy.get(".flex-col > .gap-2 > div.text-white").should(
        "have.text",
        " I accept  Terms & Conditions  and  Privacy Policy "
      );
      cy.get(":nth-child(4) > .group > .h-full").should("be.enabled");
      cy.get(":nth-child(5) > .group > .h-full").should("be.enabled");
      cy.get(".bg-\\[\\#A8A8A8\\] > .h-full").should("be.enabled");
      cy.get(".group.mb-1 > .group > .h-full").should("be.enabled");
      cy.get(":nth-child(9) > .group > .h-full").should("be.enabled");
      cy.get(".group.mb-1 > .group > .absolute").should("be.visible");
      cy.get(":nth-child(9) > .group > .absolute").should("be.visible");
      cy.get(":nth-child(4) > .group > .h-full").clear("M");
      cy.get(":nth-child(4) > .group > .h-full").clear(" ");
      cy.get(":nth-child(4) > .group > .h-full").type("Michael");
      cy.get(":nth-child(5) > .group > .h-full").clear("g");
      cy.get(":nth-child(5) > .group > .h-full").clear("G");
      cy.get(":nth-child(5) > .group > .h-full").type("Gashaw");
      cy.get(".group.mb-1 > .group > .h-full").clear("p");
      cy.get(".group.mb-1 > .group > .h-full").type("p");
      cy.get(".-bottom-6").should("have.text", "8 characters minimum");
      cy.get(".group.mb-1 > .group > .h-full").clear("pas");
      cy.get(".group.mb-1 > .group > .h-full").type("password");
      cy.get(".-bottom-6").should("have.text", "At least one uppercase letter");
      cy.get(".group.mb-1 > .group > .h-full").clear("passwordP");
      cy.get(".group.mb-1 > .group > .h-full").type("passwordP@ssw0rd");
      cy.get(":nth-child(9) > .group > .h-full").clear("p");
      cy.get(":nth-child(9) > .group > .h-full").type("pass");
      cy.get(".-bottom-6").should("be.visible");
      cy.get(":nth-child(9) > .group > .h-full").clear("passwo");
      cy.get(":nth-child(9) > .group > .h-full").type("passwordP@ssw0rd");
      cy.get(".flex-row > .flex > .fa-solid").click();
      cy.get(".px-3 > .gradient").click();
      /* ==== End Cypress Studio ==== */
    });
  });
});
