// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string;
  highlight?: boolean;
};

type User = {
  username: string;
  email: string;
  password: string;
};

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>;
    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>;
    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>;
    /**
     * Custom command to sign up
     * @example cy.signUp(user)
     */
    signUp(user: User): Chainable<Element>;

    /**
     * Custom command to sign up
     * @example cy.signIn()
     */
    signIn(email?: string, password?: string): Chainable<Element>;
  }
}
