<template>
<div>  {{ users }}</div>
</template>

<script setup lang="ts">
import { useFetchUsers } from "@/composables";
import type { User } from "@/types";
import { ref } from "vue";

const { fetchUsers } = useFetchUsers();
let users = ref<User[]>([]);
users.value = await fetchUsers();
</script>
