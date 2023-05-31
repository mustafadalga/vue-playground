import { inject } from "vue";
import type { IAxiosWrapperConstants, IUser } from "@/types";

/**
 * @typedef Address
 * @prop {string} street The street
 * @prop {string} city The City
 * @prop {number} zip The zip code
 *
 * @typedef Customer
 * @prop {string} name The Customer's name
 * @prop {string} email The Customer's email
 * @prop {Address} address The Customer's address
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


/**
 * This function adds one to its input.
 * @param {number} input any number
  * @param {{status : "active" | "inactive" | "inprocess"}} status is active inactive or inprogress
 * @returns { number } that number, plus one.
 */
function addOne(input:number,status:string):number {
    return input + 1;
  }