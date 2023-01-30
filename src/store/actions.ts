import type { AxiosError, IResponse } from "@/types";
import axios from "axios";
import type { Commit } from "vuex";

export default {
    async fetchUsers({commit}: { commit: Commit }) {
        const url:string = "https://jsonplaceholder.typicode.com/users";

        try {
            const response: IResponse = await axios.get(url);
            commit("setUsers", response.data);

        } catch (error) {
            commit("setNotification", (error as AxiosError).message)
        }
    }
}