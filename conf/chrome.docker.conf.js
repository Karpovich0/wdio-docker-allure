import { config as dockerConfig } from "./docker.conf.js";

export const config = {
	...dockerConfig,
	capabilities: [
		{
			maxInstances: 1,
			browserName: "chrome",
			acceptInsecureCerts: true,
			"goog:chromeOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
	],
};
