<script lang="ts" setup>
import { computed } from "vue";
import type { User } from "@/types/types";
import { useStore } from "vuex";
const store = useStore();
const user = computed<User>(() => store.getters.getUser);
</script>

<template>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
        <div class="flex items-center justify-center">
            <img src="https://via.placeholder.com/150" alt="User avatar"
                 class="rounded-full w-32 h-32 border-4 border-gray-200">
        </div>
        <div class="text-center mt-4">
            <h2 class="text-3xl font-bold text-gray-800" data-testid="username">{{ user.username }}</h2>
            <p class="text-xl text-gray-600" data-testid="fullName">{{ user.fullName }}</p>
            <p class="text-gray-500 text-lg mt-2" data-testid="age">{{ user.age }}</p>
            <p class="text-gray-500 text-lg mt-2" data-testid="job">{{ user.job }}</p>
        </div>
        <div class="flex justify-between mt-6">
            <div class="text-center">
                <p class="text-gray-500 font-bold text-lg">Followers</p>
                <p class="text-gray-800 text-2xl" data-testid="followers">{{ user.followers }}</p>
            </div>
            <div class="text-center">
                <p class="text-gray-500 font-bold text-lg">Following</p>
                <p class="text-gray-800 text-2xl" data-testid="following">{{ user.following }}</p>
            </div>
            <div class="text-center">
                <p class="text-gray-500 font-bold text-lg">Repositories</p>
                <p class="text-gray-800 text-2xl" data-testid="repositories">{{ user.repositories }}</p>
            </div>
        </div>
    </div>
</template>
