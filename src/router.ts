import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
import JobPreferencesPage from "@/pages/JobPreferencesPage.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: LandingPage,
	},
	{
		path: "/job-preferences",
		name: "Job",
		component: JobPreferencesPage,
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
