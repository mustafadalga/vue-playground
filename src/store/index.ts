import { createStore } from "vuex";
import type { IPost } from "@/types";

/**
 * @module store
 */

interface IState {
    posts: IPost[];
    authorization: string;
}

export const store = createStore<IState>({
    state() {
        return {
            posts: [],
            authorization: "rWqhs?/vIo!1Xqvvak39WNovIrm!waeWdAIJT1ZxrlJYaMF7=ufjJU0Xj2XP53Z0Qrw4ftZaBSvyxiEOL9uweKMFxixBe!b4ms7e8lajmH5AeGVGzhSj8/Xdsczc3fqsZc=a9fuHUceniDUdearFVyqVAqK1yHv3sy-RvLuRV=xQ-1--ujnJKDufa/WMPON!?QUT/91nrvo5PlMLLS59zM1!Zn69Ty050aXu0j0!9ocgbhHGbn-wPhLBaluoOKLw            "
        }
    },
    getters: {
        getPosts: (state) => state.posts,
        getAuthorization: (state) => state.authorization,
    },
    mutations: {
            /**
         * This mutation  set post list
         * @param { object, object } state posts  
         */ 
        setPosts: (state, posts:IPost[]) => state.posts = posts
    },
    actions: {
        /**
         * This action get post list
         * @param { object }  { commit }
         */ 
        async setPosts({ commit }) {
            const url = "/posts";

            try {
                // @ts-ignore
                const response = await this.$axios.v1.get(url);
                const posts:IPost[] = response.data;
                commit("setPosts", posts);
            } catch (error) {
            }
        },
    }
})
