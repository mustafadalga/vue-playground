<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import useCheckUserPosts from "@/composables/useCheckUserPosts";
const store = useStore();
const posts = computed(() => store.getters.getPosts);
const isLoaded = computed<boolean>(
  () => store.getters.getApisLoadState.posts?.isLoaded
);
function changeActiveUserID() {
  store.commit("resetStore");
  const id = Math.floor(Math.random() * 100) + 1;
  store.commit("setActiveUserID", id);
}

useCheckUserPosts();
</script>

<template>
  <div id="app" class="p-10 grid gap-4">
    <div>
      <button
        type="button"
        @click="changeActiveUserID"
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Get random user Posts
      </button>
    </div>
    <pre v-if="isLoaded">
    {{ posts }}
    </pre>

    <h1 v-else class="text-3xl">Loading...</h1>
  </div>
</template>
