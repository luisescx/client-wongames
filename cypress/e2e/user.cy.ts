// <reference path="../support/index.d.ts" />

import { createUser } from "../support/generate";

describe("User", () => {
  it.skip("should sign up", () => {
    const user = createUser();

    cy.visit("/sign-up");
    cy.wait(60000);

    cy.signUp(user);

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.findByText(user.username).should("exist");
  });

  it("should sign in and sign out", () => {
    cy.visit("/sign-in");

    cy.signIn().then(() => {
      cy.url().should("eq", `${Cypress.config().baseUrl}/`);

      cy.findByText(/teste5/i)
        .should("exist")
        .click();
      cy.findByText(/sign out/i).click();
      cy.findByRole("link", { name: /sign in/i }).should("exist");
      cy.findByText(/teste5/i).should("not.exist");
    });
  });

  it.skip("should sign the user and redirect to the page that it was previously defined", () => {
    cy.visit("/profile/me");
    cy.location("href").should(
      "eq",
      `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`
    );

    cy.signIn().then(() => {
      cy.location("href").should(
        "eq",
        `${Cypress.config().baseUrl}/profile/me`
      );

      cy.findByLabelText(/username/i).should("have.value", "teste5");
      cy.findByLabelText(/e-mail/i).should("have.value", "teste5@email.com");
    });
  });
});
