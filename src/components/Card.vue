<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const CardSummary = defineAsyncComponent(() => import("./CardSummary.vue"));
const CardDetail = defineAsyncComponent(() => import("./CardDetail.vue"));
const showSummary = ref(false);
const showDetail = ref(false);

setTimeout(() => showSummary.value = true, 500);
</script>

<template>
  <div data-testid="card"
      class="m-5 border border-solid border-gray-200 bg-white rounded-lg overflow-hidden">
    <CardSummary v-if="showSummary"
                 v-model:showDetail="showDetail"/>
    <CardDetail v-if="showDetail"/>
  </div>
</template>
