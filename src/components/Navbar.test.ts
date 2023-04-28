import { render, cleanup, fireEvent } from "@testing-library/vue";
import { it, describe, expect, vi, afterEach } from "vitest";
import type { Mock } from "vitest"
import Navbar from "@/components/Navbar.vue";

afterEach(cleanup)

const mockPush: Mock = vi.fn();

vi.mock("vue-router", () => ({
    useRouter: (): { push: Mock } => ({
        push: mockPush,
    }),
}));


describe("Navbar.vue", () => {
    it('should push to the react route when button is clicked', async (): Promise<void> => {
        // Arrange
        const buttonID: string = "react";
        const routerName: string = "react";
        //Act
        const { findByTestId } = render(Navbar);
        const button: HTMLElement = await findByTestId(buttonID);
        await fireEvent.click(button);
        //Assert
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith({ name: routerName });
    });
})
