import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import JobSearch from "./pages/JobSearch.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/job-search",
		name: "JobSearch",
		component: JobSearch,
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
