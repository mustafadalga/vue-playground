import { createStore } from "vuex";
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions'
import type { IState } from "@/store/types";


const store = createStore<IState>({
    state,
    mutations,
    getters,
    actions
})

export default store;