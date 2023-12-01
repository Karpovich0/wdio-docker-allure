import { config as mainConfig } from "../wdio.conf.js";

export const config = {
	...mainConfig,
	specs: ["./../test/specs/**/*.js"],
	capabilities: [
		{
			browserName: "firefox",
			"moz:firefoxOptions": {
				args: ["-headless"],
			},
		},
	],
};
