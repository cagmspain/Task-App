import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
		children: [
			{
				path: "/login",
				name: "login",
				component: () => import("../views/Login.vue"),
			},
			{
				path: "/signup",
				name: "signup",
				component: () => import("../views/SignUp.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
