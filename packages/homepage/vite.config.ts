import { UserConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import ComponentsPlugin from "vite-plugin-components";

export default {
	plugins: [
		Vue(),
		ComponentsPlugin({
			dirs: ["src/pages", "src/components"],
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/styles/globals";`,
			},
		},
	},
} as UserConfig;
