<template>
    <Suspense>
        <Users/>

        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import Users from "@/components/Users.vue";
</script>
