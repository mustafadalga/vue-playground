<script setup lang="ts">
import Post from "@/components/Post.vue";
import type { IPost } from "@/types";

const post: IPost = {
  id: 1,
  userId: "1",
  username: "mustafadalga",
  body: "post body:erit? Ab aut culpa cum dolores eligendi et laboriosam minima, nesciunt placeat repudiandae sapiente, sit vel veniam veritatis voluptates!",
  showIcon: true
}
</script>

<template>
  <div id="app" class="p-10 grid gap-4">
    <Post :post="post"/>
  </div>
</template>
