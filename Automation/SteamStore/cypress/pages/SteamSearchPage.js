class SteamSearchPage {

    get searchInput() {
        return cy.get("input[name='term']");
    }

    get searchResultRows() {
        return cy.get("#search_resultsRows a");
    }

    get searchBoxOnResultsPage() {
        return cy.get("input.text");
    }

    visitHomePage() {
        cy.visit("/");
    }

    searchForGame(gameName) {
        this.searchInput.should("be.visible").clear().type(gameName).type("{enter}");
    }

    reSearchForGame(gameName) {
        this.searchBoxOnResultsPage
            .should("be.visible")
            .clear()
            .type(gameName);
        cy.get("button.btn_small").click();
    }

    handleAgeGateIfPresent() {
        cy.get("body").then(($body) => {
            if ($body.find("#agecheck_form").length > 0) {
                cy.get("#ageYear").select("1990");
                cy.get(".btnv6_blue_hoverfade").click();
            }
        });
    }

    extractGameData(index) {
        return this.searchResultRows.eq(index).then(($row) => {

            const name = $row.find(".title").text().trim();

            const platforms = [];
            if ($row.find(".platform_img.win").length > 0) platforms.push("Windows");
            if ($row.find(".platform_img.mac").length > 0) platforms.push("macOS");
            if ($row.find(".platform_img.linux").length > 0) platforms.push("Linux");

            const releaseDate = $row.find(".search_released").text().trim();

            const reviewTooltip = $row
                .find(".search_review_summary")
                .attr("data-tooltip-html") || "";
            const reviewSummary = reviewTooltip.split("<br>")[0].trim() || "No Reviews";

            const price = $row.find(".discount_final_price").text().trim() || "Free";

            return { name, platforms, releaseDate, reviewSummary, price };
        });
    }

}

const steamSearchPage = new SteamSearchPage();
export default steamSearchPage;