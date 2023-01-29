import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const ViewVue = () => import("@/views/Vue.vue");
const ViewReact = () => import("@/views/React.vue");

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
    ]
})


export default router;