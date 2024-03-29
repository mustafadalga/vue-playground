<script setup lang="ts">
defineProps({
  movie: String
})

const keywords=[ "nature", "city", "technology", "food", "animals", "architecture", "travel", "business", "music" ] // Additional keywords
const randomIndex = Math.floor(Math.random() * keywords.length);
const id = keywords[randomIndex];
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img :src="`https://source.unsplash.com/400x300/?${id}`" alt="Random Image">

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
</template>

<style scoped>

</style>