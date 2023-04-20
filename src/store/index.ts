import { defineStore } from 'pinia'
import type { Post } from "@/types";

interface State {
    posts: Post[];
}

export const usePostsStore = defineStore('posts', {
    state: (): State => ({
        posts: []
    }),
    getters: {
        getPosts: (state: State) => state.posts,
    },
    actions: {
        setPosts(posts: Post[]) {
            this.posts = posts
        },
    },
})