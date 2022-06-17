import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse HEAD").toString().trim();
const buildDate = Date.now();

export default defineConfig({
	define: {
		__COMMIT_HASH__: JSON.stringify(commitHash),
		__BUILD_DATE__: JSON.stringify(buildDate),
	},
	plugins: [
		Vue(),
		Components({
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
	resolve: {
		alias: {
			"@/": new URL("./src/", import.meta.url).pathname,
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
});
