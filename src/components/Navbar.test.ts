import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import Navbar from "./Navbar.vue";

describe("Navbar.vue", () => {
    it("Should router-link has a forward route name", async () => {

        const wrapper = mount(Navbar, {
            global: {
                stubs: {
                    "router-link": RouterLinkStub
                },
            }
        });

        const expectedRedirectRoute = {name: "vue"};

        const routerLinks = wrapper.findAllComponents(RouterLinkStub);
        const firstRouteLink = routerLinks[0];
        const resultRoute = firstRouteLink.props("to");

        expect(resultRoute).toEqual(expectedRedirectRoute);
    });
});

