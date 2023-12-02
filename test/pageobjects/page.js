import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
	/**
	 * Opens a sub page of the page
	 * @param path path of the sub page (e.g. /path/to/page.html)
	 */
	get acceptCookiesButton() {
		return $("#onetrust-accept-btn-handler");
	}

	get logo() {
		return $('header a[href="/"]');
	}

	async acceptCookies() {
		await this.acceptCookiesButton.click();
	}

	async goMain() {
		await this.logo.click();
	}

	async openAndAcceptCookies(path) {
		await browser.url(`${path}`);
		await browser.pause(2000);
		if (await this.acceptCookiesButton.isDisplayedInViewport()) {
			await this.acceptCookies();
		}
	}
}
