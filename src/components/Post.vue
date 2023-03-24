<script lang="ts" setup>
import type { PropType } from "vue";
import type { IPost } from "@/types";
import { defineAsyncComponent } from "vue";
const IconLogo = defineAsyncComponent(() => import ("./IconLogo.vue"));

const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true
  }
})
</script>

<template>
  <div
      class="relative grid gap-4 border border-solid border-purple-200 rounded-lg bg-white p-4 lg:px-5 lg:pt-6 lg:pb-5">

    <IconLogo v-if="post.showIcon"
              data-testid="logo"
              fill-class=""/>

    <h2 class="font-semibold text-base lg:text-[17px]">
      {{ post.username }}
    </h2>
    <p class="font-normal text-xs lg:text-[13px] line-clamp-2">
      {{ post.body }}
    </p>
  </div>
</template>