import { expect } from "@wdio/globals";

import ContactUsPage from "./../pageobjects/contactUs.page.js";
import telnyx from "./../fixutes/telnyx.js";

describe("Telnyx SMS API page", () => {
	it("Page Load Validation", async () => {
		await ContactUsPage.openAndAcceptCookies();
		await expect(browser).toHaveUrl(telnyx.contactUsLink);
		await expect(await $("h1")).toHaveText(telnyx.contactUsTitle);
	});
	it("Send Empty Form", async () => {
		await ContactUsPage.openAndAcceptCookies();
		await ContactUsPage.sumbitButton.scrollIntoView();
		await ContactUsPage.sumbitButton.click();
		await expect(ContactUsPage.errorMessage).toBeDisplayedInViewport();
	});

	it("Open Report Abuse Form", async () => {
		await ContactUsPage.openAndAcceptCookies();
		await ContactUsPage.reportAbuse.scrollIntoView();
		await ContactUsPage.reportAbuse.click();
		await expect(browser).toHaveUrl(telnyx.reportAbuseLink);
	});
});
