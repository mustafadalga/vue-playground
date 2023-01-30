import { it, expect, describe, vi } from "vitest";
import axios from "axios";
import actions from "./actions";
import type { IUser } from "@/types";

vi.mock("axios");

const mockSuccessData: IUser[] = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
];


describe("Store - actions", () => {

    describe("fetchUsers()", () => {

        const commit = vi.fn();

        it("Should call rest api with correct url", async () => {
            vi.spyOn(axios, 'get').mockResolvedValueOnce({data: mockSuccessData});

            await actions.fetchUsers({commit});

            const expectedURL: string = "https://jsonplaceholder.typicode.com/users"
            expect(axios.get).toHaveBeenCalledWith(expectedURL);
        })

        it("Should return user list", async () => {
            vi.spyOn(axios, 'get').mockResolvedValueOnce({data: mockSuccessData});

            await actions.fetchUsers({commit});

            const expectedCommit: IUser[] = JSON.parse(JSON.stringify(mockSuccessData))
            expect(commit).toHaveBeenCalledWith("setUsers", expectedCommit);
        });

        it("Should create a notification message if rest api fails:Network Error", async () => {
            const error: Error = new Error('Network Error');

            vi.spyOn(axios, 'get').mockRejectedValueOnce(error);

            await actions.fetchUsers({commit});

            const expectedCommit: string = error.message;
            expect(commit).toHaveBeenCalledWith("setNotification", expectedCommit);
        })
    });
})
