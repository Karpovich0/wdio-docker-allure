import { config as dockerConfig } from "./docker.conf.js";

export const config = {
	...dockerConfig,
	capabilities: [
		{
			maxInstances: 1,
			browserName: "firefox",
			acceptInsecureCerts: true,
			"moz:firefoxOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
	],
};
