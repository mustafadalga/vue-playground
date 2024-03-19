<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const skils = [
  "TypeScript",
  "JavaScript",
  "Vue.js ",
  "React.js ",
  "Next.js ",
  "Vuex",
  "Pinia",
  "exception",
  "Redux",
  "Zustand",
  "SCSS",
  "CSS ",
  "Tailwind CSS",
  "exception",
  "Vitest",
  "Testing Library",
  "Vue Test Utils"
]
</script>

<template>
  <div class="flex flex-wrap p-20 gap-8 text-3xl">

    <template v-for="skill in skils">
      <div v-if="skill!='exception'" :key="skill"
           class="backdrop-filter backdrop-blur-md bg-white bg-opacity-10 dark:bg-gray-800 px-5 py-1.5 rounded-lg text-white border border-white border-opacity-75">
        {{ skill }}
      </div>

      <div v-else class="w-52"></div>
    </template>
  </div>
</template>
