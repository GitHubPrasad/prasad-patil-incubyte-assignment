import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly addressField: Locator;
  readonly cityField: Locator;
  readonly stateField: Locator;
  readonly zipCodeField: Locator;
  readonly phoneField: Locator;
  readonly ssnField: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = page.locator('input[name="customer.firstName"]');
    this.lastNameField = page.locator('input[name="customer.lastName"]');
    this.addressField = page.locator('input[name="customer.address.street"]');
    this.cityField = page.locator('input[name="customer.address.city"]');
    this.stateField = page.locator('input[name="customer.address.state"]');
    this.zipCodeField = page.locator('input[name="customer.address.zipCode"]');
    this.phoneField = page.locator('input[name="customer.phoneNumber"]');
    this.ssnField = page.locator('input[name="customer.ssn"]');
    this.usernameField = page.locator('input[name="customer.username"]');
    this.passwordField = page.locator('input[name="customer.password"]');
    this.confirmPasswordField = page.locator('input[name="repeatedPassword"]');
    this.registerButton = page.locator('input[type="submit"]').first();
    this.successMessage = page.locator(
      "text=/Your account was created successfully/i",
    );
  }

  async fillRegistrationForm(userData: Record<string, string>) {
    if (userData["firstName"]) {
      await this.firstNameField.fill(userData["firstName"]);
    }
    if (userData["lastName"]) {
      await this.lastNameField.fill(userData["lastName"]);
    }
    if (userData["address"]) {
      await this.addressField.fill(userData["address"]);
    }
    if (userData["city"]) {
      await this.cityField.fill(userData["city"]);
    }
    if (userData["state"]) {
      await this.stateField.fill(userData["state"]);
    }
    if (userData["zipCode"]) {
      await this.zipCodeField.fill(userData["zipCode"]);
    }
    if (userData["phone"]) {
      await this.phoneField.fill(userData["phone"]);
    }
    if (userData["ssn"]) {
      await this.ssnField.fill(userData["ssn"]);
    }
    if (userData["username"]) {
      await this.usernameField.fill(userData["username"]);
    }
    if (userData["password"]) {
      await this.passwordField.fill(userData["password"]);
      await this.confirmPasswordField.fill(userData["password"]);
    }
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async isSuccessMessageDisplayed() {
    return await this.successMessage
      .isVisible({ timeout: 5000 })
      .catch(() => false);
  }

  async register(userData: Record<string, string>) {
    await this.fillRegistrationForm(userData);
    await this.clickRegisterButton();
    await this.waitForPageLoad();
  }
}
