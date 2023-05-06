<script setup lang="ts">
import axios from 'axios';
import { ref } from "vue";
import type { User } from "@/types";

const user = ref<User>();

async function fetchData(): Promise<void> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    user.value = response.data;
}
</script>


<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="user" class="user">
            {{ user.name }}
        </div>
    </div>
</template>