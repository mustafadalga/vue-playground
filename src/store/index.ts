import { createStore } from "vuex";
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import type { User } from "@/types/types";

export const key: InjectionKey<Store<State>> = Symbol()


export interface State {
    user: User | {}
}

export const store: Store<State> = createStore<State>({
    state: {
        user: {}
    },
    getters: {
        getUser: (state: State): State["user"] => state.user
    },
    mutations: {
        setUser(state:State, user: User): void {
            state.user = user;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        clearUser(state: State): void {
            state.user = {};
            localStorage.removeItem("user");
        },
        restoreUser(state: State): void {
            const user: string | null = localStorage.getItem("user");
            if (user) {
                state.user = JSON.parse(user);
            }
        },
    }
})
