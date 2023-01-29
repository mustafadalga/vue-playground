<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
<template>
  <div class="grid content-start grid-rows-[8rem_1fr] bg-[#a5001b]/25">

    <nav class="bg-[#a5001b] grid place-items-center">
      <div class="grid gap-3">
        <h1 class="text-4xl text-white text-center">Angular</h1>
        <Navbar/>
      </div>
    </nav>

    <div class="grid place-items-center">
      <slot/>
    </div>
  </div>
</template>
