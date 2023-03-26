<script lang="ts" setup>
import Input from "@/components/Input.vue";

const emit = defineEmits([ "input" ]);
</script>

<template>
  <section class="flex items-center justify-between gap-5 h-20 px-8 bg-white border-b border-solid border-gray-300">
    <h1 class="text-2xl lg:text-3xl">Website</h1>
    <Input class="max-w-2xl" @input="$emit('input',$event)"/>
  </section>
</template>
