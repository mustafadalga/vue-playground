<script setup lang="ts">
import Card from "@/components/Card.vue";
import data from "@/data";
</script>

<template>
  <div id="app" class="p-10">
    <Card :card="data" class="max-w-md" />
  </div>
</template>
