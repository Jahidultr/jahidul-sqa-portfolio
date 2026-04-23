class UserManagementPage {

    get adminMenuLink() {
        return cy.get(".oxd-main-menu-item").contains("Admin");
    }

    get addButton() {
        return cy.get("button").contains("Add");
    }

    get userRoleDropdown() {
        return cy
            .get(".oxd-grid-item")
            .contains("User Role")
            .parents(".oxd-grid-item")
            .find(".oxd-select-wrapper");
    }

    get employeeNameInput() {
        return cy
            .get(".oxd-grid-item")
            .contains("Employee Name")
            .parents(".oxd-grid-item")
            .find("input");
    }

    get statusDropdown() {
        return cy
            .get(".oxd-grid-item")
            .contains("Status")
            .parents(".oxd-grid-item")
            .find(".oxd-select-wrapper");
    }

    get usernameInput() {
        return cy
            .get(".oxd-grid-item")
            .contains("Username")
            .parents(".oxd-grid-item")
            .find("input");
    }

    get passwordInput() {
        return cy
            .get(".oxd-grid-item")
            .contains("Password")
            .parents(".oxd-grid-item")
            .find('input[type="password"]');
    }

    get confirmPasswordInput() {
        return cy
            .get(".oxd-grid-item")
            .contains("Confirm Password")
            .parents(".oxd-grid-item")
            .find('input[type="password"]');
    }

    get saveButton() {
        return cy.get('button[type="submit"]').contains("Save");
    }

    get searchUsernameInput() {
        return cy
            .get(".oxd-grid-item")
            .contains("Username")
            .parents(".oxd-grid-item")
            .find("input");
    }

    get searchButton() {
        return cy.get("button").contains("Search");
    }

    get tableBody() {
        return cy.get(".oxd-table-body");
    }

    get tableRows() {
        return cy.get(".oxd-table-body .oxd-table-row");
    }


    navigateToAdminModule() {
        this.adminMenuLink.click();
        cy.url().should("include", "/admin/viewSystemUsers");
        cy.get(".oxd-table").should("be.visible");
    }

    clickAddUser() {
        this.addButton.click();
        cy.url().should("include", "/admin/saveSystemUser");
    }

    selectDropdownOption(dropdownEl, optionText) {
        dropdownEl.click();
        cy.get(".oxd-select-dropdown").contains(optionText).click();
    }

    selectUserRole(role) {
        this.selectDropdownOption(this.userRoleDropdown, role);
    }

    selectStatus(status) {
        this.selectDropdownOption(this.statusDropdown, status);
    }

    typeEmployeeName() {

        cy.intercept("GET", "**/api/v2/pim/employees**").as("employeeSearch");

        this.employeeNameInput.clear().type("a");


        cy.wait("@employeeSearch");


        cy.get(".oxd-autocomplete-option")
            .should("not.contain.text", "Searching")
            .first()
            .then(($option) => {
                const selectedName = $option.text().trim();
                Cypress.env("selectedEmployeeName", selectedName);
                cy.log(`Selected employee: ${selectedName}`);
            });


        cy.get(".oxd-autocomplete-option")
            .not(":contains('Searching')")
            .first()
            .click();
    }

    fillAddUserForm(userData, username) {
        this.selectUserRole(userData.userRole);
        this.typeEmployeeName();
        this.selectStatus(userData.status);
        this.usernameInput.clear().type(username);
        this.passwordInput.type(userData.password);
        this.confirmPasswordInput.type(userData.confirmPassword);
    }

    saveUser() {
        this.saveButton.click();
    }

    searchUserByUsername(username) {
        cy.url().should("include", "/admin/viewSystemUsers");
        this.searchUsernameInput.clear().type(username);
        this.searchButton.click();
        cy.get(".oxd-loading-spinner").should("not.exist");
    }

    verifyUserInSearchResults(username) {
        this.tableBody.should("be.visible");
        this.tableRows.should("have.length.greaterThan", 0);
        this.tableBody.contains(username).should("be.visible");
    }

    clickUserFromResults(username) {
        this.tableBody
            .contains(username)
            .parents(".oxd-table-row")
            .find(".oxd-icon-button")
            .last()
            .click();
    }

    verifyUserDetails(userData, username) {
        this.usernameInput.should("have.value", username);
        this.userRoleDropdown
            .find(".oxd-select-text-input")
            .should("not.contain.text", "-- Select --");
        this.statusDropdown
            .find(".oxd-select-text-input")
            .should("not.contain.text", "-- Select --");

        const selectedEmployee = Cypress.env("selectedEmployeeName");
        if (selectedEmployee) {
            this.employeeNameInput.should("have.value", selectedEmployee);
        }

        cy.log("All fields verified successfully");
    }
}

module.exports = new UserManagementPage();