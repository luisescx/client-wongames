/// <reference path="../support/index.d.ts" />

describe("Game Page", () => {
  before(() => {
    cy.visit("/game/cyberpunk-2077");
    cy.wait(60000);
  });

  it("should render game page sections", () => {
    cy.get(`[data-cy="game-info"]`).within(() => {
      cy.findByRole("heading", { name: /cyberpunk 2077/i }).should("exist");
      cy.findByText(/^This game is part of your Welcome Offer/i).should(
        "exist"
      );
      cy.findByText("$99.99").should("exist");
      cy.findByRole("button", { name: /add to cart/i }).should("exist");
    });

    cy.findAllByRole("button", { name: /thumb \-/i }).should(
      "have.length.gt",
      0
    );

    cy.getByDataCy("content").within(() => {
      cy.findByRole("heading", { name: /description/i }).should("exist");
    });

    cy.getByDataCy("content").children().should("have.length.at.least", 2);

    cy.getByDataCy("game-details").within(() => {
      cy.findByRole("heading", { name: /game details/i }).should("exist");
      cy.findByRole("heading", { name: /developer/i }).should("exist");
      cy.findByRole("heading", { name: /release date/i }).should("exist");
      cy.findByRole("heading", { name: /platforms/i }).should("exist");
      cy.findByRole("heading", { name: /publisher/i }).should("exist");
      cy.findByRole("heading", { name: /rating/i }).should("exist");
      cy.findByRole("heading", { name: /genres/i }).should("exist");

      cy.findAllByText(/cd projekt red/i).should("have.length", 2);
      cy.findByText(/dec 8, 2020/i).should("exist");
      cy.findByRole("img", { name: /windows/i }).should("exist");
      cy.findByText("18+").should("exist");
      cy.findByText("Action / Sci-fi / Role-playing").should("exist");
    });

    cy.shouldRenderShowcase({ name: "Upcoming", highlight: true });
    cy.shouldRenderShowcase({
      name: "You may like these games",
      highlight: false
    });
  });

  it("should add/remove game in cart", () => {
    cy.getByDataCy("game-info").within(() => {
      cy.findByRole("button", { name: /add to cart/i }).click();
      cy.findByRole("button", { name: /remove from cart/i }).should("exist");
    });

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should("have.length", 1)
      .click();

    cy.getByDataCy("cart-list").within(() => {
      cy.findByRole("heading", { name: /cyberpunk 2077/i }).should("exist");
    });

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click();

    // remove from cart
    cy.getByDataCy("game-info").within(() => {
      cy.findByRole("button", { name: /remove from cart/i }).click();
      cy.findByRole("button", { name: /add to cart/i }).should("exist");
    });

    cy.findAllByLabelText(/cart items/i).should("not.exist");
  });
});
