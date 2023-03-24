import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/vue";
import { flushPromises, mount } from "@vue/test-utils";
import type { IPost } from "@/types";
import IconLogo from "./IconLogo.vue";
import Post from "./Post.vue";

const post: IPost = {
    id: 1,
    userId: "1",
    username: "mustafadalga",
    body: "post body:erit? Ab aut culpa cum dolores eligendi et laboriosam minima, nesciunt placeat repudiandae sapiente, sit vel veniam veritatis voluptates!",
    showIcon: true
}

describe("Post.vue", () => {

    describe("vue-test-utils", () => {
        it('Should show user icon', async () => {
            const wrapper = mount(Post, {
                props: {
                    post
                }
            });
            await flushPromises();
            await vi.dynamicImportSettled();
            expect(wrapper.findComponent(IconLogo).exists()).toBe(true);
        });
    })

    describe("testing-library", () => {
        it('Should show user icon', async () => {

            render(Post, {
                props: {
                    post
                }
            });

            await vi.dynamicImportSettled();
            const component = await screen.findByTestId("logo") as HTMLElement;

            //@ts-ignore
            expect(component).toBeInTheDocument();
        });
    })


});