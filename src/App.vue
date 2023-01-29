<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div id="app" class="h-screen w-screen grid content-start grid-rows-[3rem_1fr]">

    <Navbar/>

    <div class="grid place-items-center bg-gray-100 h-full">
      <RouterView/>
    </div>
  </div>
</template>
