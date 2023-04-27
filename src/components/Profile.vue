<script lang="ts" setup>
import { computed, PropType } from "vue";
import IconArrow from "./IconArrow.vue";
import { store } from "@/store";

const user=computed(()=>store.getters.getUser);

</script>

<template>
<div class="bg-gray-100 p-4 rounded-lg shadow-md">
  <div class="flex items-center justify-center">
    <img src="https://via.placeholder.com/150" alt="User avatar" class="rounded-full w-32 h-32 border-4 border-gray-200">
  </div>
  <div class="text-center mt-4">
    <h2 class="text-3xl font-bold text-gray-800">Username</h2>
    <p class="text-xl text-gray-600">Full Name</p>
    <p class="text-gray-500 text-lg mt-2">Age</p>
    <p class="text-gray-500 text-lg mt-2">Job</p>
  </div>
  <div class="flex justify-between mt-6">
    <div class="text-center">
      <p class="text-gray-500 font-bold text-lg">Followers</p>
      <p class="text-gray-800 text-2xl">10</p>
    </div>
    <div class="text-center">
      <p class="text-gray-500 font-bold text-lg">Following</p>
      <p class="text-gray-800 text-2xl">20</p>
    </div>
    <div class="text-center">
      <p class="text-gray-500 font-bold text-lg">Repositories</p>
      <p class="text-gray-800 text-2xl">5</p>
    </div>
  </div>
</div>

</template>
