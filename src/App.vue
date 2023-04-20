<script>
import { usePostsStore } from "@/store";
import { useFetchPosts } from "@/composables"
import { mapState } from 'pinia'

export default {
    computed: {
        ...mapState(usePostsStore, [ 'getPosts' ]),
    },
    methods: {
        fetchData () {
            const { fetchPosts } = useFetchPosts();
            fetchPosts()
        }
    }
}
</script>


<template>
    <button @click="fetchData">fetch</button>

    <ul>
        <li v-for="post in getPosts">
            {{ post.title }}
        </li>
    </ul>
</template>