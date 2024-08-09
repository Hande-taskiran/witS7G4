import { errorMessages } from "../../src/components/Forms";
describe("Forms Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  describe("Error Messages", () => {
    it("name input throws error for 2 chars", () => {
      cy.get('[data-cy="ad-input"]').type("ha");
      cy.contains(errorMessages.ad);
    });
    it("surname input throws error for 2 chars", () => {
      cy.get('[data-cy="soyad-input"]').type("ha");
      cy.contains(errorMessages.soyad);
    });
    it("email input throws error for emre@wit.", () => {
      cy.get('[data-cy="email-input"]').type("emre@wit.");
      cy.contains(errorMessages.email);
    });
    it("password input throws error for 1234", () => {
      cy.get('[data-cy="password-input"]').type("1234");
      cy.contains(errorMessages.password);
    });
    it("button is disabled for unvalidated inputs", () => {
      cy.get('[data-cy="submit"]').should("be.disabled");
    });
  });
  describe("Form inputs validated", () => {
    it("button enabled for validated inputs", () => {
      cy.get('[data-cy="ad-input"]').type("Hande");
      cy.get('[data-cy="soyad-input"]').type("Taşkıran");
      cy.get('[data-cy="email-input"]').type("hadne@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("123456Hh.");
      cy.get('[data-cy="submit"]').should("be.enabled");
    });
  });
});
