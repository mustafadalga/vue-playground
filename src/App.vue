<script setup lang="ts">
import Profile from "@/components/Profile.vue";
import { useStore } from "vuex";
import type { User } from "@/types/types";
import { key } from "@/store";

const store = useStore(key);
const user: User = {
    username: "mustafadalga",
    fullName: "Mustafa Dalga",
    job: "Software Developer",
    age: 24,
    followers: 100,
    following: 55,
    repositories: 23
}


store.commit("setUser", user);
</script>

<template>
    <div id="app" class="p-10">
        <Profile class="mx-auto max-w-lg"/>
    </div>
</template>
