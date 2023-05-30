<script lang="ts" setup>
import { useFetchUsers } from "@/composables";
import { ref } from "vue";
import type { IUser } from "@/types";

const {fetchUsers} = useFetchUsers()
const users = ref<IUser[]>([]);

/**
 * this function will fetch user list
 */
async function handleUsers() {
    users.value = await fetchUsers();
}
</script>

<template>
    <section class="flex items-center flex-col">
    <button @click="handleUsers" class="bg-blue-400 text-white px-10 py-3 rounded-lg">Fetch Users</button>


    <ul class="grid gap-5 mt-20">
        <li v-for="user in users">{{ user.name }}</li>
    </ul>
</section>
</template>
