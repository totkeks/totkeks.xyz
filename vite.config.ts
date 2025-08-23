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
			dirs: ["src/components"],
		}),
	],
	resolve: {
		alias: {
			"@/": new URL("./src/", import.meta.url).pathname,
		},
	},
});
