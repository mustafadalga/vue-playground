import { createStore } from 'vuex'
import axios, { type CancelTokenSource } from "axios"


export interface State {
    axiosCancelToken: CancelTokenSource,
    jwt: string | null,
    apiURL: string,
    activeClient: string | null
}

const store = createStore<State>({
    state: {
        axiosCancelToken: axios.CancelToken.source(),
        jwt: null,
        apiURL: import.meta.env.API_BASE_URL,
        activeClient: null
    },
    getters: {
        getJWT(state) {
            return state.jwt
        },
        getAxiosCancelToken(state) {
            return state.axiosCancelToken
        },
        getApiURL(state) {
            return state.apiURL
        },
        getActiveclient(state) {
            return state.activeClient
        }
    },
    mutations: {
        setJWT(state, jwt) {
            state.jwt = jwt
        },
        setAxiosCancelToken(state) {
            state.axiosCancelToken = axios.CancelToken.source()
        },
        cancelAxiosCancelToken(state) {
            state.axiosCancelToken.cancel();
        },
        setActiveClient(state, activeClient) {
            state.activeClient = activeClient
        }
    }
})

export default store;