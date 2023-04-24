import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const ViewVue = () => import("@/views/Vue.vue");
const ViewReact = () => import("@/views/React.vue");
const ViewAngular = () => import("@/views/Angular.vue");


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "vue",
            path: "/",
            component: ViewVue,
        },
        {
            name: "react",
            path: "/react",
            component: ViewReact,
        },
        {
            name: "angular",
            path: "/angular",
            component: ViewAngular,
        },
    ]
});

router.beforeEach((to, from, next) => {
    store.mutations.setCurrentFullPath(to.fullPath);
    next();
})



export default router;