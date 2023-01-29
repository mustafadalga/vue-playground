import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const ViewVue = () => import("@/views/Vue.vue");
const ViewReact = () => import("@/views/React.vue");
const ViewAngular = () => import("@/views/Angular.vue");
const layoutVue = defineAsyncComponent(() => import("@/layouts/LayoutVue.vue"));
const layoutReact = defineAsyncComponent(() => import("@/layouts/LayoutReact.vue"));
const layoutAngular = defineAsyncComponent(() => import("@/layouts/LayoutAngular.vue"));

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "vue",
            path: "/",
            component: ViewVue,
            meta: {
                layout: layoutVue
            },
        },
        {
            name: "react",
            path: "/react",
            component: ViewReact,
            meta: {
                layout: layoutReact
            },
        },
        {
            name: "angular",
            path: "/angular",
            component: ViewAngular,
            meta: {
                layout: layoutAngular
            },
        },
    ]
})


export default router;