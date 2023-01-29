import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import CardDetail from "@/components/CardDetail.vue";
import CardSummary from "@/components/CardSummary.vue";

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.clearAllTimers();
});

describe("Card.vue", () => {
    it('should show card summary component', async () => {
        const wrapper = mount(Card);
        await vi.runAllTimers();
        await flushPromises();
        await vi.dynamicImportSettled();

        expect(wrapper.findComponent(CardSummary).exists()).toBe(true);
    });


    it('should show card detail component', async () => {
        const wrapper = mount(Card);
        await vi.runAllTimers();
        await flushPromises();
        await vi.dynamicImportSettled();

        const arrow = await wrapper.find('[data-testid="arrow"]');
        arrow.trigger("click");

        await flushPromises();

        expect(wrapper.findComponent(CardDetail).exists()).toBe(true);
    });
})