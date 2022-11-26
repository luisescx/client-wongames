/// <reference path="../support/index.d.ts" />

describe("Game Page", () => {
  it("should render game page sections", () => {
    cy.visit("/game/cyberpunk-2077");

    cy.wait(60000);

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
  });
});
