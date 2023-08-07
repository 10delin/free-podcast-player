/* global describe, beforeEach, cy, it */

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the list of podcasts", () => {
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("table-item").should("be.visible");
  });

  it("should filter podcasts by search term", () => {
    cy.get("input[type='text']").type("example podcast{enter}");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("table-item").should("be.visible");
  });

  it("should reset the filter when the '❌' button is clicked", () => {
    cy.get("input[type='text']").type("example podcast");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("table-item").should("be.visible");
    cy.getBySel("button-reset-filter").click();
    cy.getBySel("table-item").should("have.length", 10);
  });

  it("should sort podcasts by name, duration, and release date", () => {
    cy.getBySel("order-by").select("name");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("order-by").select("duration");
    cy.getBySel("table-content").should("be.visible");
    cy.getBySel("order-by").select("date");
    cy.getBySel("table-content").should("be.visible");
  });

  it("should navigate to a specific podcast page when 'Go to podcast' button is clicked", () => {
    cy.getBySel("go-to-podcast").eq(0).click();
    cy.url().should("include", "/podcast/1");
  });
});
