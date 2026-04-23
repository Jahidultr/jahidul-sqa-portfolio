class LoginPage {

    get usernameInput() {
        return cy.get('input[name="username"]');
    }

    get passwordInput() {
        return cy.get('input[name="password"]');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    get dashboardHeader() {
        return cy.get(".oxd-topbar-header-breadcrumb");
    }

    visit() {
        cy.visit("/web/index.php/auth/login");
    }

    login(username, password) {
        this.usernameInput.clear().type(username);
        this.passwordInput.clear().type(password);
        this.loginButton.click();
    }

    verifyLoginSuccess() {
        cy.url().should("include", "/dashboard");
        this.dashboardHeader.should("be.visible");
    }
}

module.exports = new LoginPage();