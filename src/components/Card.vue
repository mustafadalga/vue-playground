<script lang="ts" setup>
import type { IData } from "@/types";
import { computed, PropType } from "vue";
import IconArrow from "./IconArrow.vue";

const props = defineProps({
  card: {
    type: Object as PropType<IData>,
    required: true
  }
})

const pieChartPercent = computed(() => ({"--percent": props.card.rateofSuccess}));
</script>

<template>
  <div class="grid gap-4 rounded-lg bg-white p-4 lg:px-5 lg:pt-6 lg:pb-5 shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]">
    <div class="flex items-center justify-between">

      <div data-testid="pie-chart"
           :class="[$style.pie, 'grid place-items-center rounded-full w-12 h-12 p-0.5 lg:h-14 lg:w-14 lg:p-1.5']"
           :style="pieChartPercent">
        {{ card.rateofSuccess }}
      </div>

      <div
          data-testid="rate-of-change"
          :class="['h-6 max-h-[1.5rem] px-2.5 py-1.5 flex justify-center items-center gap-1 rounded-2xl',
           card.rateofChange > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500']">

        <IconArrow :class="['w-3 h-3', card.rateofChange >= 0 ? 'rotate-180' : '']"/>
      </div>
    </div>


    <div class="grid gap-3 content-start">

      <h2
          data-testid="title"
          class="font-switzer font-semibold text-gray-900 text-base lg:text-[17px] mt-4 lg:mt-5 mt-2 lg:mb-3">
        {{ card.title }}
      </h2>

      <div class="flex">
        <p v-if="card.hasLanguage"
           data-testid="language"
           class="px-3 py-2 rounded-md font-switzer text-gray-600 font-normal text-xs lg:text-[13px] bg-green-100 max-w-[10rem]">
          {{ card.language }}
        </p>

        <p v-else
           data-testid="coming-soon"
           class="px-3 py-2 rounded-md font-switzer text-gray-600 font-normal text-xs lg:text-[13px] bg-gray-100 max-w-[10rem]">
          Coming Soon
        </p>
      </div>

    </div>
  </div>
</template>
<style module>
.pie {
  --v: calc(((18 / 5) * var(--percent) - 90) * 1deg);
  background: linear-gradient(#FFF, #FFF) content-box,
  linear-gradient(var(--v), #FF3838 50%, transparent 0) 0/min(100%, (50 - var(--percent)) * 100%),
  linear-gradient(var(--v), transparent 50%, #25C966 0) 0/min(100%, (var(--percent) - 50) * 100%),
  linear-gradient(to right, #FF3838 50%, #25C966 0);
}
</style>
