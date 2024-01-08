import { createStore } from "vuex";
import type { Post } from "@/types";

export interface ApisLoadState {
    isCalled: boolean;
    isLoaded: boolean;
}

export interface ApiLoadState extends ApisLoadState {
    api: string;
}

export interface State {
    posts: Post[];
    activeUserID: number;
    apisLoadState: {
        [key: string]: ApisLoadState;
    };
}

const initialState = () => ({
    posts: [],
    activeUserID: 1,
    apisLoadState: {},
});

export const store = createStore<State>({
    state: initialState,
    getters: {
        getPosts: (state: State): State["posts"] => state.posts,
        getActiveUserID: (state: State): State["activeUserID"] =>
            state.activeUserID,
        getApisLoadState: (state: State): State["apisLoadState"] =>
            state.apisLoadState,
    },
    mutations: {
        setPosts(state, posts: Post[]) {
            state.posts = posts;
        },
        setActiveUserID: (state, id: number) => state.activeUserID = id,
        setApisLoadState: (state, data: ApiLoadState) => {
            if (!state.apisLoadState[data.api]) {
                state.apisLoadState[data.api] = {
                    isCalled: false,
                    isLoaded: false,
                };
            }

            if (Object.prototype.hasOwnProperty.call(data, "isCalled")) {
                state.apisLoadState[data.api].isCalled = data.isCalled;
            }

            if (Object.prototype.hasOwnProperty.call(data, "isLoaded")) {
                state.apisLoadState[data.api].isLoaded = data.isLoaded;
            }
        },
        resetStore: (state) => Object.assign(state, initialState()),
    },
    actions: {
        async setPosts({ state, commit }) {
            try {
                const url = `https://jsonplaceholder.typicode.com/posts?userID=${state.activeUserID}`;
                const response = await fetch(url);
                const responseJson = await response.json();
                commit("setPosts", responseJson);
            } catch (error) {
                console.error(
                    `An error occurred during fetching post detail. Please try again: ${error}`
                );
            }
        },
    },
});
