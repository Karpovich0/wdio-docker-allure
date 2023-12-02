import { expect } from "@wdio/globals";

import SmsApiPage from "./../pageobjects/smsApi.page.js";
import telnyx from "./../fixutes/telnyx.js";

describe("Telnyx SMS API page", () => {
	it("Open MMS page", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.mmsLink.click();
		await expect(browser).toHaveUrl(telnyx.mmsApiLink);
		await expect(await $("h1")).toHaveText(telnyx.mmsApiText);
	});

	it("Change programing language", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.resourcesDiv.scrollIntoView();
		await expect(SmsApiPage.startBuildingHeader).toBeDisplayedInViewport();
		await SmsApiPage.pythonLanguage.click();
		await expect(await SmsApiPage.pythonLanguage.getAttribute("aria-selected")).toBe("true");
		await expect(await SmsApiPage.curlLanguage.getAttribute("aria-selected")).toBe("false");
	});

	it("Open pricing page", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.pricingSubtitle.scrollIntoView();
		await SmsApiPage.pricngLink.click();
		await expect(browser).toHaveUrl(telnyx.pricingLink);
		await expect(await $("h1 span")).toHaveText(telnyx.pricingTitle);
	});

	it("Slider functionality", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.nextSlide.scrollIntoView();
		await SmsApiPage.nextSlide.click();
		await expect(SmsApiPage.twoFactorNotificationSlide).toBeDisplayedInViewport();
	});

	it("FAQ slider functionality", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.faqTitle.scrollIntoView();
		await SmsApiPage.faqSliderItem.click();
		await expect(await SmsApiPage.faqSliderItem.getAttribute("data-state")).toBe("open");
	});

	it("Read customer story", async () => {
		await SmsApiPage.openAndAcceptCookies();
		await SmsApiPage.customerStoriesTitle.scrollIntoView();
		await SmsApiPage.customerStoriesLink.click();
		await expect(browser).toHaveUrl(telnyx.customerStoriesLink);
		await expect(await $("h1")).toHaveText(telnyx.pointBlankPoliticalTitle);
	});
});
