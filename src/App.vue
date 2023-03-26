<script setup lang="ts">
import { computed, ref } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Post from "@/components/Post.vue";
import type { IPost } from "@/types";
import Banner from "@/components/Banner.vue";

const posts = ref<IPost[]>([]);
const searchText = ref<string>("");
const postList = computed<IPost[]>(() => {
  if (searchText.value.length > 3) {
    return posts.value.filter(post => post.title.includes(searchText.value) || post.body.includes(searchText.value))
  }
  return posts.value;
});

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


    <section>
      <Banner @input="searchText=$event" class="sticky top-0 z-10"/>
      <section class="py-16 px-8 lg:px-10">
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <Post v-for="post in postList"
                :post="post"/>
        </div>
      </section>

    </section>
  </main>
</template>
