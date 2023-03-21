<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Post from "@/components/Post.vue";
import type { IPost } from "@/types";

const posts = ref<IPost[]>([]);

fetchPosts();

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  posts.value = await response.json();
}
</script>

<template>
  <main class="grid grid-cols-[12rem_1fr] w-full max-w-screen-2xl mx-auto bg-white">
    <section class="bg-blue-100	sticky top-0 h-screen">
      <Sidebar/>
    </section>


    <section class="text-5xl py-16 px-8 lg:px-10">
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <Post v-for="post in posts"
              :post="post"/>
      </div>
    </section>
  </main>
</template>
