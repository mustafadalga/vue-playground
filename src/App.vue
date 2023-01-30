<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import type { IUser } from "@/types";

const store = useStore();
store.dispatch("fetchUsers");

const users = computed<IUser[]>(() => store.getters.getUsers);
</script>

<template>
  <div id="app" class="h-screen w-screen p-5">

    <ul class="grid gap-2 border border-solid border-black">
      <li v-for="user in users" class="h-10 border-b border-solid border-black last:border-0">
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>
