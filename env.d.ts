/// <reference types="vite/client" />

declare module "*.vue" {
	import { DefineComponent } from "vue";
	// eslint-disable-next-line
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare const __COMMIT_HASH__: string;
declare const __BUILD_DATE__: string;
