/* global describe, beforeEach, cy, it */

describe("Podcast Page", () => {
  beforeEach(() => {
    cy.visit("/podcast/1");
  });

  it("should display podcast content", () => {
    cy.getBySel("podcast-content").should("be.visible");
  });
  it("should display the list of podcasts", () => {
    cy.getBySel("table-content").should("be.visible");
  });

  it("should filter podcasts by search term", () => {
    cy.get("input[type='text']").type("example podcast{enter}");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("table-item").should("be.visible");
  });

  it("should reset the filter when the '❌' button is clicked", () => {
    cy.get("input[type='text']").type("the");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("table-item").should("be.visible");
    cy.getBySel("button-reset-filter").click();
    cy.getBySel("table-item").should("be.visible");
  });

  it("should sort podcasts by name, duration, and release date", () => {
    cy.getBySel("order-by").select("name");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("order-by").select("duration");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("order-by").select("date");
    cy.getBySel("table-content").should("be.visible");
  });

  it("should change actual podcast", () => {
    cy.getBySel("change-actual-podcast").eq(0).click();
    cy.getBySel("media-player-bar").should("be.visible");
  });

  it("should navigate to a specific podcast page when 'Go to podcast' button is clicked", () => {
    cy.getBySel("go-to-home").eq(0).click();
    cy.url().should("include", "/");
  });
});
