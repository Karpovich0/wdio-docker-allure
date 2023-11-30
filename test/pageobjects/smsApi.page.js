import { $ } from "@wdio/globals";
import Page from "./page.js";

class SmsApiPage extends Page {
	get mmsLink() {
		return $('[href="https://telnyx.com/products/mms-api"]');
	}

	get resourcesDiv() {
		return $('div[aria-label="RESOURCES"]');
	}

	get startBuildingHeader() {
		return $('//h2[text()="Start building"]');
	}

	get curlLanguage() {
		return $('div[aria-label="RESOURCES"] button:nth-of-type(1)');
	}

	get pythonLanguage() {
		return $('div[aria-label="RESOURCES"] button:nth-of-type(2)');
	}

	get pricingSubtitle() {
		return $('//strong[text()="PRICING"]');
	}

	get pricngLink() {
		return $('a[href="https://telnyx.com/pricing/messaging"]');
	}

	get nextSlide() {
		return $('[aria-label="Go to next item"]');
	}

	get accountNotifationSlide() {
		return $("#Account-notifications");
	}
	get twoFactorNotificationSlide() {
		return $("#Two-factor-authentication");
	}

	get faqTitle() {
		return $('//strong[text()="FAQ"]');
	}

	get faqSliderItem() {
		return $('//h3[text()="How do I get started with the Telnyx SMS API?"]/..');
	}

	get customerStoriesTitle() {
		return $('//strong[text()="CUSTOMER STORIES"]');
	}

	get customerStoriesLink() {
		return $('a[href="https://telnyx.com/customer-stories/pointblank-political-campaign-sms"]');
	}

	async openAndAcceptCookies() {
		await super.openAndAcceptCookies("/products/sms-api");
	}
}

export default new SmsApiPage();
