import type { User } from "@/types";
import axios, { type AxiosResponse } from "axios";

function useFetchUsers() {


    async function fetchUsers(): Promise<User[]> {
        await new Promise(resolve =>setTimeout(resolve,2000))

        const url: string = "https://jsonplaceholder.typicode.com/users";
        let users: User[] = [];
        try {

            const response: AxiosResponse<User[]> = await axios.get(url);
            users = response.data;

        } catch (e) {
            //
        }

        return users;
    }

    return {
        fetchUsers
    }
}

export {
    useFetchUsers
}