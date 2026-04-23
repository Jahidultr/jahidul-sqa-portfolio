Cypress.Commands.add("loginAsAdmin", () => {
    const username = Cypress.env("ADMIN_USERNAME");
    const password = Cypress.env("ADMIN_PASSWORD");

    cy.visit("/web/index.php/auth/login");
    cy.get('input[name="username"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
});

Cypress.Commands.add("selectOxdDropdown", (label, option) => {
    cy.get(".oxd-grid-item")
        .contains(label)
        .parents(".oxd-grid-item")
        .find(".oxd-select-wrapper")
        .click();
    cy.get(".oxd-select-dropdown").contains(option).click();
});