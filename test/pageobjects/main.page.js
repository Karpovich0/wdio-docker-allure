import { $ } from "@wdio/globals";
import Page from "./page.js";

class MainPage extends Page {
	get logo() {
		return $('header [href="/"]');
	}
	get headerNavigation() {
		return $("header nav:not([id])");
	}

	get solutionsLink() {
		return $('header a[href="/solutions"]');
	}

	get footer() {
		return $("footer");
	}

	get footerGlobalCoverage() {
		return $('footer a[href="/global-coverage"]');
	}

	get productsDropDown() {
		return $("header nav>button");
	}

	get smsApi() {
		return $('[href="/products/sms-api"]');
	}

	async scrollToFooter() {
		await this.footer.scrollIntoView();
	}
}

export default new MainPage();
