<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import type { IPost } from "@/types";

const store = useStore();

const posts = computed<IPost[]>(() => store.getters.getPosts);


function fetchPosts() {
    store.dispatch("setPosts");
}
</script>

<template>
<section class="flex items-center flex-col">
    <button @click="fetchPosts()" class="bg-blue-400 text-white px-10 py-3 rounded-lg">show Posts</button>


    <ul class="grid gap-5 mt-20">
        <li v-for="post in posts">

            <p>
                {{ post.title.substring(0,24) }}...
            </p>
        </li>
    </ul>
</section>
</template>
