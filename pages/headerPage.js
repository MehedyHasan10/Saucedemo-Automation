export class HeaderPage {
  constructor(page) {
    this.page = page;
    this.menuBtn = page.locator("#react-burger-menu-btn");
    this.logoutLink = page.locator("#logout_sidebar_link");
  }

  async logout() {
    await this.menuBtn.click();
    await this.logoutLink.click();
  }
}
