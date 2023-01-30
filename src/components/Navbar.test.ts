import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

const mockUseRouter = {
    push: vi.fn()
}

vi.doMock("vue-router", async () => {
    const original: any = await vi.importActual("vue-router");
    return {
        ...original,
        useRouter: () => mockUseRouter
    };
});
import Navbar from "./Navbar.vue";


beforeEach(() => {
    mockUseRouter.push.mockClear();
});


describe("Navbar.vue", () => {
    it("Should router be call once when the user clicks the button", async () => {
        const {getByTestId} = render(Navbar);
        const reactButton = getByTestId("react");
        await fireEvent.click(reactButton);
        expect(mockUseRouter.push).toHaveBeenCalledTimes(1);
    });

    it("Should redirect to react page when user clicks the button", async () => {
        const { getByTestId } = render(Navbar);
        const reactButton = getByTestId("react");
        await fireEvent.click(reactButton);
        const expectedRoute = {name: "react"};
        expect(mockUseRouter.push).toHaveBeenCalledWith(expectedRoute);
    });
});

