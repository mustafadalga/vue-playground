import { mount, flushPromises, type VueWrapper } from "@vue/test-utils";
import axios from "axios";
import DataFetcher from "@/components/DataFetcher.vue";
import { vi, it, expect, type SpyInstance } from "vitest";
import type { User } from "@/types";

it("fetches data and updates the DOM", async (): Promise<void> => {
    const user: User = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    };

    // Spy on the axios.get method
    const mockedAxiosGet:SpyInstance = vi.spyOn(axios, "get");
    mockedAxiosGet.mockReturnValueOnce(Promise.resolve({ data: user }));

    // Mount the component
    const wrapper: VueWrapper = mount(DataFetcher);

    // Trigger the button click
    await wrapper.find("button").trigger("click");

    // Wait for all pending promises to resolve
    await flushPromises();

    // Now you can make assertions about the component's state or DOM after the promises have resolved
    expect(wrapper.find(".user").html()).toContain(user.name);

    // Clean up the axios.get mock
    mockedAxiosGet.mockRestore();
});
