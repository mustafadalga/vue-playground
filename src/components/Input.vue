<script setup lang="ts">
import { defineModel } from "vue";
const model = defineModel<string>();
</script>

<template>
  <input type="text"
         v-model="model"
         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 focus:border-indigo-300 block w-full p-2.5"
         placeholder="Search"/>
</template>
