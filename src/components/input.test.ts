import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import { mount } from "@vue/test-utils"
import Input from "./Input.vue";


describe("Input.vue", () => {

    it("Should emit input event with correct value:@vue/test-utils", async () => {
        const testValue: string = "test value";
        const wrapper = mount(Input);
        const input = wrapper.find('[data-testid="input"]');

        await input.setValue(testValue);

        expect(wrapper.emitted().input).toBeTruthy();
        expect(wrapper.emitted().input[0]).toEqual([ testValue ]);
    });

    it("Should emit input event with correct value:@testing-library/vue", async () => {
        const testValue: string = "test value";
        const {emitted} = render(Input);
        const input = screen.getByTestId("input") as HTMLElement;

        await fireEvent.update(input, testValue);

        expect(emitted().input).toBeTruthy();
        expect(emitted().input[0]).toEqual([ testValue ]);
    });

})