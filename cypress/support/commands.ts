/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Add Testing Library Commands
import "@testing-library/cypress/add-commands";
import { User } from "./generate";

Cypress.Commands.add("getByDataCy", (selector, ...args) => {
  cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add("shouldRenderBanner", () => {
  cy.get(".slick-slider").within(() => {
    cy.findByRole("heading", { name: /metal gear solid/i });
    cy.findByRole("link", { name: /buy now/i });

    cy.get(".slick-dots > :nth-child(2) > button").click();
    cy.wait(500);

    cy.findByRole("heading", { name: /psychonauts 2/i });
    cy.findByRole("link", { name: /buy now/i });

    cy.get(".slick-dots > :nth-child(3) > button").click();
    cy.wait(500);

    cy.findByRole("heading", {
      name: /vampire®: The Masquerade - Bloodlines/i
    });
    cy.findByRole("link", { name: /buy now/i });
  });
});

Cypress.Commands.add("shouldRenderShowcase", ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole("heading", { name }).should("exist");

    cy.getByDataCy("highlight").should(highlight ? "exist" : "not.exist");

    if (highlight) {
      cy.getByDataCy("highlight").within(() => {
        cy.findByRole("link").should("have.attr", "href");
      });
    }

    cy.getByDataCy("game-card").should("have.length.gt", 0);
  });
});

Cypress.Commands.add("signUp", (user: User) => {
  cy.findByPlaceholderText(/username/i).type(user.username);
  cy.findByPlaceholderText(/email/i).type(user.email);
  cy.findByPlaceholderText(/^password/i).type(user.password);
  cy.findByPlaceholderText(/confirm password/i).type(user.password);
  cy.findByRole("button", { name: /sign up now/i }).click();
});

Cypress.Commands.add(
  "signIn",
  (email = "teste5@email.com", password = "teste123") => {
    cy.findAllByPlaceholderText(/email/i).type(email);
    cy.findAllByPlaceholderText(/password/i).type(password);
    cy.findByRole("button", { name: /sign in now/i }).click();
  }
);
