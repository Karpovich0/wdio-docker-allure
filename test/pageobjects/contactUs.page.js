import { $ } from "@wdio/globals";
import Page from "./page.js";

class ContactUsPage extends Page {
	get sumbitButton() {
		return $("form button");
	}

	get errorMessage() {
		return $("div.mktoError");
	}

	get reportAbuse() {
		return $('div>a[href="https://telnyx.com/report-abuse"]');
	}

	async openAndAcceptCookies() {
		await super.openAndAcceptCookies("/contact-us");
	}
}

export default new ContactUsPage();
