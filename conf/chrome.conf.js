"use strict";

import { config as mainConfig } from "../wdio.conf.js";

export const config = {
	...mainConfig,
	specs: ["./../test/specs/**/*.js"],
	capabilities: [
		{
			browserName: "chrome",
			"goog:chromeOptions": {
				args: ["headless", "disable-gpu"],
			},
		},
	],
};
