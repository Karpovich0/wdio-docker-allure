export const config = {
	//
	// ====================
	// Runner Configuration
	// ====================
	// WebdriverIO supports running e2e tests as well as unit and component tests.
	runner: "local",
	specs: ["./test/specs/**/*.js"],
	before: function (capabilities, specs, browser) {
		browser.setWindowRect(0, 0, 1600, 960);
	},

	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],

	maxInstances: 10,

	capabilities: [
		{
			browserName: "chrome",
			"goog:chromeOptions": {
				args: ["headless", "disable-gpu"],
			},
		},
		{
			browserName: "firefox",
			"moz:firefoxOptions": {
				args: ["-headless"],
			},
		},
	],
	logLevel: "info",
	bail: 0,
	baseUrl: "https://telnyx.com",
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	framework: "mocha",
	reporters: [["allure", { outputDir: "allure-results" }]],
	mochaOpts: {
		ui: "bdd",
		timeout: 60000,
	},
	afterTest: async function (test, context, { error, result, duration, passed, retries }) {
		if (!passed) {
			await browser.takeScreenshot();
		}
	},
};
