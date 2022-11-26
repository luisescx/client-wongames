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
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole("heading", { name }).should("exist");

    cy.get(`[data-cy="highlight"]`).should(highlight ? "exist" : "not.exist");

    if (highlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole("link").should("have.attr", "href");
      });
    }
  });
});
