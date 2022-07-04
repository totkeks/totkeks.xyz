import { RouteLocation } from "vue-router";

declare module "vue" {
	interface ComponentCustomProperties {
		$route: RouteLocation;
	}
}
