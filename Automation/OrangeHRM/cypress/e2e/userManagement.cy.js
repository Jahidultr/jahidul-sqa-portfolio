import loginPage from "../pages/LoginPage";
import userManagementPage from "../pages/UserManagementPage";

describe("OrangeHRM - User Management", () => {
  let userData;

  before(() => {
    cy.fixture("userData").then((data) => {
      userData = data.newUser;
    });
  });

  beforeEach(() => {
    cy.loginAsAdmin();
  });

  // TC01: Login
  it("TC01 - Should login successfully with valid admin credentials", () => {
    loginPage.verifyLoginSuccess();
    cy.log("Login successful");
  });

  // TC02: Navigate to Admin 
  it("TC02 - Should navigate to the Admin module successfully", () => {
    userManagementPage.navigateToAdminModule();
    cy.url().should("include", "/admin/viewSystemUsers");
    cy.contains("System Users").should("be.visible");
    cy.log("Admin module loaded");
  });

  // TC03: Create New User 
  it("TC03 - Should create a new user with dynamically generated username", () => {
    const timestamp = Date.now();
    const generatedUsername = `testuser_${timestamp}`;
    Cypress.env("createdUsername", generatedUsername);

    userManagementPage.navigateToAdminModule();
    userManagementPage.clickAddUser();
    cy.log(`Generated username: ${generatedUsername}`);

    userManagementPage.fillAddUserForm(userData, generatedUsername);
    userManagementPage.saveUser();

    cy.url().should("include", "/admin/viewSystemUsers");
    cy.log("User created successfully");
  });

  // TC04: Search Created User
  it("TC04 - Should search and find the created user by username", () => {
    const usernameToSearch = Cypress.env("createdUsername");
    expect(usernameToSearch).to.not.be.undefined;

    userManagementPage.navigateToAdminModule();
    userManagementPage.searchUserByUsername(usernameToSearch);
    userManagementPage.verifyUserInSearchResults(usernameToSearch);

    cy.log(`User '${usernameToSearch}' found in search results`);
  });

  // TC05: Verify User Details
  it("TC05 - Should verify all details of the created user match the input", () => {
    const usernameToVerify = Cypress.env("createdUsername");
    expect(usernameToVerify).to.not.be.undefined;

    userManagementPage.navigateToAdminModule();
    userManagementPage.searchUserByUsername(usernameToVerify);
    userManagementPage.verifyUserInSearchResults(usernameToVerify);
    userManagementPage.clickUserFromResults(usernameToVerify);
    userManagementPage.verifyUserDetails(userData, usernameToVerify);

    cy.log("All user details verified successfully");
  });
});