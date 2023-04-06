<script setup lang="ts">
import Users from "@/components/Users.vue";
import Posts from "@/components/Posts.vue";
import Photo from "@/components/Photo.vue";
</script>

<template>
    <main class="grid grid-cols-3 gap-16 p-10">
        <Posts/>
        <Users/>
        <Photo/>
    </main>
</template>
