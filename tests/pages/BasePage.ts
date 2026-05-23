import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string, timeout: number = 30000) {
    await this.page.goto(url, { waitUntil: "domcontentloaded", timeout });
  }

  async waitForPageLoad(timeout: number = 15000) {
    try {
      await this.page.waitForLoadState("domcontentloaded", { timeout });
    } catch (error) {
      console.log("Page load timeout, but continuing");
    }
  }
}
