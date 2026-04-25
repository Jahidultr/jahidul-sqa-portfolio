import SteamSearchPage from "../pages/SteamSearchPage";

describe("Steam Store - Search and Verification", () => {

  let firstGame = {};
  let secondGame = {};

  before(() => {
    cy.step("Step 1: Visit Steam Store");
    cy.visit("/");

    cy.step("Step 2: Search for Dota 2");

    cy.get('input[name="term"]', { timeout: 20000 })
      .should("be.visible")
      .type("Dota 2{enter}");

    cy.get("#search_resultsRows").should("exist");
  });

  it("TC01: Search results page correctly displayed", () => {
    cy.step("Step 3: Verify search results page is displayed");

    cy.url().should("include", "/search");
    cy.get("#search_resultsRows a", { timeout: 15000 }).should("exist");
  });

  it("TC02:Search box contains 'Dota 2'", () => {
    cy.step("Step 3: Verify search query contains Dota 2");

    cy.url().should("include", "Dota");
  });

  it("TC03: First result name exactly matches 'Dota 2'", () => {
    cy.step("Step 3: Verify first result is Dota 2");

    cy.get("#search_resultsRows a", { timeout: 15000 })
      .first()
      .find(".title")
      .invoke("text")
      .invoke("trim")
      .should("equal", "Dota 2");
  });

  context("Step 4: Store Game Data from Search Results", () => {

    it("TC04: Extract and store data from 1st search result", () => {
      cy.step("Step 4: Extract data from 1st game");

      SteamSearchPage.extractGameData(0).then((data) => {
        firstGame = data;
        cy.writeFile("cypress/fixtures/gameData.json", { firstGame, secondGame });

        cy.log(`Name        : ${firstGame.name}`);
        cy.log(`Platforms   : ${firstGame.platforms.join(", ")}`);
        cy.log(`Release Date: ${firstGame.releaseDate}`);
        cy.log(`Review      : ${firstGame.reviewSummary}`);
        cy.log(`Price       : ${firstGame.price}`);

        expect(firstGame.name).to.equal("Dota 2");
        expect(firstGame.releaseDate).to.not.be.empty;
      });
    });

    it("TC05: Extract and store data from 2nd search result", () => {
      cy.step("Step 4: Extract data from 2nd game");

      SteamSearchPage.extractGameData(1).then((data) => {
        secondGame = data;
        cy.writeFile("cypress/fixtures/gameData.json", { firstGame, secondGame });

        cy.log(`Name        : ${secondGame.name}`);
        cy.log(`Platforms   : ${secondGame.platforms.join(", ")}`);
        cy.log(`Release Date: ${secondGame.releaseDate}`);
        cy.log(`Review      : ${secondGame.reviewSummary}`);
        cy.log(`Price       : ${secondGame.price}`);

        expect(secondGame.name).to.not.be.empty;
        expect(secondGame.releaseDate).to.not.be.empty;
      });
    });

  });

  context("Step 5: Re-search Using Second Game Name", () => {

    it("TC06: Re-search using the 2nd game name", () => {
      cy.step("Step 5: Re-search using 2nd game name");

      cy.visit(`https://store.steampowered.com/search/?term=${encodeURIComponent(secondGame.name)}`);
      cy.get("#search_resultsRows a", { timeout: 20000 }).should("exist");
    });

  });

  context("Step 6: Final Verification", () => {

    it("TC07: Search box contains the 2nd game name", () => {
      cy.step("Step 6: Verify search query updated with 2nd game");

      cy.url().should("include", secondGame.name.split(" ")[0]);
    });

    it("TC08: Result list contains 1st game (Dota 2)", () => {
      cy.step("Step 6: Verify result list contains first game");

      cy.get("#search_resultsRows a", { timeout: 20000 }).then(($rows) => {
        const allNames = [...$rows].map((row) =>
          Cypress.$(row).find(".title").text().trim()
        );
        expect(allNames).to.include(firstGame.name);
      });

    });

    it("TC9: Result list contains 2nd game", () => {
      cy.step("Step 6: Verify result list contains second game");

      cy.get("#search_resultsRows a").then(($rows) => {
        const allNames = [...$rows].map((row) =>
          Cypress.$(row).find(".title").text().trim()
        );
        expect(allNames).to.include(secondGame.name);
      });

    });

    it("TC10: All stored data matches for the 2nd game", () => {
      cy.step("Step 6: Verify stored data matches for 2nd game");

      SteamSearchPage.extractGameData(0).then((freshData) => {
        expect(freshData.name).to.equal(secondGame.name);
        expect(freshData.releaseDate).to.equal(secondGame.releaseDate);
        expect(freshData.price).to.equal(secondGame.price);
      });
    });

  });

});