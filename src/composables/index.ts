import { inject } from "vue";
import type { IAxiosWrapperConstants, IUser } from "@/types";

/**
 * @function useFetchUsers()
 * arkadaş burada birşeyler olacak
 * @typedef Address
 * @prop {string} street The street
 * @prop {string} city The City
 * @prop {number} zip The zip code
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
* @typedef Option Interface
* @prop {string} name The Customer's name
* @prop {string} email The Customer's email
* @prop {string} address The Customer's address
*/
interface Option{
    name: number,
    email: string,
    address: string
}

/**
 * This function adds one to its input.
 * @param {number} input any number
 * @param {("active"|"inactive"|"inprocess")} options.status - The status value. * @returns { number } that number, plus one.
 */
function addOne(input:number,status:string):number {
    return input + 1;
  }