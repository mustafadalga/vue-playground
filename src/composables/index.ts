import { usePostsStore } from "@/store";
import type { Post } from "@/types";

export function useFetchPosts() {
    const store = usePostsStore()

    async function fetchPosts() {
        const url: string = "https://jsonplaceholder.typicode.com/posts";

        try {
            const response = await fetch(url);
            const responseJSON: Post[] = await response.json();
            store.setPosts(responseJSON);

        } catch (e: any) {
            //
        }
    }

    return {
        fetchPosts
    }
}