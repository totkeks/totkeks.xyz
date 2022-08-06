import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: LandingPage,
	},
	{
		path: "/job-preferences",
		name: "Job Preferences",
		component: () => import("@/pages/JobPreferencesPage.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: "Home" },
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
