import { inject } from "vue";
import type { IAxiosWrapperConstants, IUser } from "@/types";

/**
 * this function will return users
 * @returns users
 */
function useFetchUsers() {
    const $axios: IAxiosWrapperConstants = inject("$axios")!;

    async function fetchUsers(): Promise<IUser[]> {
        const url = "/users";

        const response = await $axios.v1.get(url);
        const users: IUser[] = response.data;
        return users;
    }

    return {
        fetchUsers
    }
}

export {
    useFetchUsers
}