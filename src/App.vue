<script setup lang="ts">
import { ref } from "vue";
import Profile from "@/components/Profile.vue";
import { useStore } from "vuex";
import type { User } from "@/types.ts";
const store = useStore();
const user: User = {
  username: "mustafadalga",
  fullName: "Mustafa Dalga",
  job: "Software Developer",
  age: 24,
  followers: 100,
  following: 100,
  repositories: 100
}


store.commit("setUser", user);

</script>

<template>
  <div id="app" class="p-10">
<Profile class="mx-auto max-w-lg"/>
  </div>
</template>
