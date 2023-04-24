<script setup lang="ts">
import { defineAsyncComponentWrapper } from "@/utilities";
import { ref } from "vue";

const Detail = defineAsyncComponentWrapper(() => import("@/components/Detail.vue"));
const showDetail = ref<boolean>(false);
</script>
<template>
    <section>
        <h1 class="text-4xl">
            React.js Page
        </h1>
        <button @click="showDetail = !showDetail">Show detail</button>

        <Detail v-if="showDetail"/>

    </section>
</template>