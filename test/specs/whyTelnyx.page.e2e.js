import { expect } from "@wdio/globals";

import WhyTelnyxPage from "./../pageobjects/whyTelnyx.page.js";
import MainPage from "../pageobjects/main.page.js";
import telnyx from "./../fixutes/telnyx.js";

describe("Telnyx SMS API page", () => {
	it("Page Validation", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await expect(browser).toHaveUrl(telnyx.whyTelnyxLink);
		await expect(await $("h1 span")).toHaveText(telnyx.whyTelnyxTitle);
	});

	it("Scroll Down On Click Functionality", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await WhyTelnyxPage.makingConnectionPossibleTitle.scrollIntoView();
		await WhyTelnyxPage.oneSpaceLink.click();
		await expect(await WhyTelnyxPage.siglePlatformTitle).toBeDisplayedInViewport();
	});

	it("Open The Hyperlocal Edge Page", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await WhyTelnyxPage.hyperlocalEdgeSection.scrollIntoView();
		await WhyTelnyxPage.hyperLocalEdgeLink.click();
		await expect(browser).toHaveUrl(telnyx.hyperlocalEdgeLink);
		await expect(await $("h1")).toHaveText(telnyx.hyperlocalEdgeTitle);
	});

	it("Open Sign Up Form", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await WhyTelnyxPage.signUpLink.scrollIntoView();
		await WhyTelnyxPage.signUpLink.click();
		await expect(browser).toHaveUrl(telnyx.signUpLink);
		await expect(await $("h1")).toHaveText(telnyx.signUpTitle);
	});

	it("Open Mission Control Link", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await WhyTelnyxPage.missionControlSection.scrollIntoView();
		await WhyTelnyxPage.missionControlLink.click();
		await expect(browser).toHaveUrl(telnyx.missionControlLink);
		await expect(await $("h1")).toHaveText(telnyx.missionControlTitle);
	});

	it("Go To Home Page From Footer", async () => {
		await WhyTelnyxPage.openAndAcceptCookies();
		await WhyTelnyxPage.footerLogo.scrollIntoView();
		await WhyTelnyxPage.footerLogo.click();
		await expect(MainPage.logo).toBeDisplayedInViewport();
		await expect(browser).toHaveUrl(telnyx.mainLink);
	});
});
