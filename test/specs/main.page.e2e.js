import { expect } from "@wdio/globals";

import MainPage from "../pageobjects/main.page.js";
import telnyx from "../fixutes/telnyx.js";
import mainPage from "../pageobjects/main.page.js";

describe("Telnyx home page", () => {
	it("Home page validation", async () => {
		await MainPage.openAndAcceptCookies("/");
		await expect(MainPage.logo).toBeDisplayedInViewport();
		await expect(MainPage.headerNavigation).toBeDisplayedInViewport();
	});

	it("Header Navigation Functionality", async () => {
		await MainPage.openAndAcceptCookies("/");
		await MainPage.solutionsLink.click();
		await expect(browser).toHaveUrl(telnyx.solutionsLink);
		await expect(await $("h1")).toHaveText(telnyx.solutionsTitle);
	});

	it("Header Navigation Dropdown's Functionality", async () => {
		await MainPage.openAndAcceptCookies("/");
		await MainPage.productsDropDown.click();
		await expect(mainPage.smsApi).toBeDisplayedInViewport();
		await mainPage.smsApi.click();
		await expect(browser).toHaveUrl(telnyx.smsApiLink);
	});

	it("Footer Navigation Functionality", async () => {
		await MainPage.openAndAcceptCookies("/");
		await MainPage.scrollToFooter();
		await MainPage.footerGlobalCoverage.click();
		await expect(browser).toHaveUrl(telnyx.globalCoverageLink);
		await expect(await $("h1 span")).toHaveText(telnyx.globalCoverageTitle);
	});

	it("Go home link", async () => {
		await MainPage.openAndAcceptCookies("/solutions");
		await MainPage.goMain();
		await expect(MainPage.logo).toBeDisplayedInViewport();
		await expect(browser).toHaveUrl(telnyx.mainLink);
	});
});
