import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly registerLink: Locator;
  readonly accountsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator('input[name="customer.username"]');
    this.passwordField = page.locator('input[name="customer.password"]');
    this.loginButton = page.locator('input[type="submit"]').first();
    this.registerLink = page.locator('a:has-text("Register")');
    this.accountsLink = page.locator('a:has-text("Accounts")');
  }

  async goto() {
    await super.goto(
      "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC",
    );
    // Add a longer wait for page load
    try {
      await this.page.waitForLoadState("domcontentloaded", { timeout: 15000 });
    } catch (error) {
      console.log("Page load timeout, but continuing with test");
    }
  }

  async enterUsername(username: string) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickAccounts() {
    await this.accountsLink.click();
  }

  async isLoggedIn() {
    // Check if we can see the Accounts link (only visible when logged in)
    return await this.accountsLink.isVisible();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    await this.waitForPageLoad();
  }
}
