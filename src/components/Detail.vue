<script lang="ts" setup>
import { computed } from "vue";
import store from "@/store";

const no = computed<string>(() => store.getters.getNo())
</script>

<template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rem.
        {{ no }}
    </p>
</template>

