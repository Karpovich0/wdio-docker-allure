import { $ } from "@wdio/globals";
import Page from "./page.js";

class WhyTelnyxPage extends Page {
	get makingConnectionPossibleTitle() {
		return $('//h2[text()="Making your connections possible"]');
	}

	get oneSpaceLink() {
		return $('[href="#mission-control"]');
	}

	get siglePlatformTitle() {
		return $('//h2[text()="Housed in a single platform"]');
	}
	get hyperlocalEdgeSection() {
		return $("#to-the-hyperlocal-edge");
	}

	get hyperLocalEdgeLink() {
		return $('[href="/resources/about-edge-connectivity"]');
	}

	get signUpLink() {
		return $('[href="https://telnyx.com/sign-up"]');
	}

	get missionControlSection() {
		return $("#mission-control");
	}

	get missionControlLink() {
		return $('[href="https://telnyx.com/mission-control"]');
	}

	get footerLogo() {
		return $('footer [href="/"]');
	}

	async openAndAcceptCookies() {
		await super.openAndAcceptCookies("/why-telnyx");
	}
}

export default new WhyTelnyxPage();
