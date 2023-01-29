<script setup>
const props = defineProps({
  showDetail: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits([ "update:showDetail" ]);
</script>
<template>
  <div class="flex items-center justify-between px-5 py-4 h-20">
    <div class="flex items-center gap-4">
      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
      </svg>

      <div class="grid gap-1">
        <h1 class="font-semibold">Title</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nulla.</span>
      </div>
    </div>

    <svg
        data-testid="arrow"
        @click="$emit('update:showDetail',!showDetail)"
        class="w-6 h-6 cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
    </svg>
  </div>
</template>
