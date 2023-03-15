<script setup lang="ts">
import { ref } from "vue";
import Input from "@/components/Input.vue";

const searchText = ref<string>("");
</script>

<template>
  <div id="app" class="p-10 grid gap-4">
    <Input @input="searchText=$event"/>

    <h1 class="text-4xl">{{ searchText }}</h1>
  </div>
</template>
