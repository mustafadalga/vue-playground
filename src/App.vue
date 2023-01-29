<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const layout = computed(() => route.meta.layout);
</script>

<template>
  <div id="app" class="grid h-screen">
    <template v-if="layout">
      <component :is="layout">
        <RouterView/>
      </component>
    </template>
    <template v-else>
      <RouterView/>
    </template>
  </div>
</template>
