Cypress.Commands.add("searchOnSteam", (gameName) => {
    cy.get("#store_nav_search_term", { timeout: 20000 })
        .should("be.visible")
        .and("not.be.disabled")
        .clear()
        .type(gameName + "{enter}");
});

Cypress.Commands.add("getGameTitleByIndex", (index) => {
    return cy
        .get("#search_resultsRows .search_result_row")
        .eq(index)
        .find(".title")
        .invoke("text")
        .invoke("trim");

});

Cypress.Commands.add("step", (message) => {
    Cypress.log({
        name: "STEP",
        message: message,
    });
    cy.log(message);
});