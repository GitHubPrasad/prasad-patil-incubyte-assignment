import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountsPage extends BasePage {
  readonly accountsList: Locator;
  readonly accountBalance: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.accountsList = page.locator(".account");
    this.accountBalance = page.locator('td[align="right"]');
    this.logoutLink = page.locator('a:has-text("Logout")');
  }

  async getAccountBalance() {
    await this.waitForPageLoad();
    const balanceText = await this.accountBalance.first().textContent();
    return balanceText ? balanceText.trim() : "";
  }

  async getAllAccountBalances() {
    await this.waitForPageLoad();
    const balances: string[] = [];
    const count = await this.accountBalance.count();

    for (let i = 0; i < count; i++) {
      const balance = await this.accountBalance.nth(i).textContent();
      if (balance) {
        balances.push(balance.trim());
      }
    }

    return balances;
  }

  async logout() {
    await this.logoutLink.click();
    await this.waitForPageLoad();
  }
}
