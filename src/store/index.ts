import { createStore } from "vuex";
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import type { User } from "@/types";

export const key: InjectionKey<Store<State>> = Symbol()


export interface State {
  user: User | {}
}

export const store = createStore<State>({
  state: {
    user: {}
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    setUser(state, user: User): void {
      state.user = user
    }
  }
})
