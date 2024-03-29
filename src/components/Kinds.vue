<script setup lang="ts">
import { kinds } from "@/data/movies";

interface Props {
  onSelect: (kind: string) => void,
  onClear: () => void
}

defineProps<Props>();
</script>

<template>
  <ul class="flex items-center gap-3 flex-wrap">
    <li @click="onClear()"
        class="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm font-semibold text-gray-700">
      Clear Filter
    </li>
    <li v-for="kind in kinds" :key="kind"
        @click="onSelect(kind)"
        class="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm font-semibold text-gray-700">
      {{ kind }}
    </li>
  </ul>
</template>
