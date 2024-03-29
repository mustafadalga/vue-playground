<script setup lang="ts">
import type { PropType } from "vue";

interface Movie {
  title: string,
  kinds: string[],
  image: string
}

defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true
  }
})

</script>

<template>
  <div class="max-w-sm rounded overflow-hidden bg-indigo-200 shadow-lg">
    <img :src="movie.image" alt="Random Image">

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <div class="flex items-center gap-2 flex-wrap p-4">
      <span
          v-for="kind in movie.kinds"
          :key="kind"
          class="bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{{ kind }}</span>
    </div>
  </div>
</template>

<style scoped></style>
