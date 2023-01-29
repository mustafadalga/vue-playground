import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import router from "@/router";
import App from "./App.vue";
import Vue from "@/views/Vue.vue";

describe("Navbar.vue", () => {
    it("Should show vue page", async () => {
        router.push("/");
        await router.isReady();

        const wrapper = mount(App, {
            global: {
                plugins: [ router ]
            }
        });

        expect(wrapper.findComponent(Vue).exists()).toBe(true);
    });

    it("Should show react page after redirect to react route", async () => {
        router.push("/");
        await router.isReady();

        const wrapper = mount(App, {
            global: {
                plugins: [ router ]
            }
        });

        let expectedText: string = "Vue.js";

        expect(wrapper.html()).toContain(expectedText);

        const linkReact = wrapper.find('[data-testid="react"]');
        await linkReact.trigger("click");

        await flushPromises();
        await vi.dynamicImportSettled();

        expectedText = "React.js";

        expect(wrapper.html()).toContain(expectedText);
    });
});

