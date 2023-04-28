<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

function redirect(name: string) {
    router.push({ name })
}
</script>
<template>
    <nav>
        <ul class="flex items-center gap-5">
            <li>
                <button @click="redirect('vue')">Vue.js</button>
            </li>
            <li>
                <button @click="redirect('react')" data-testid="react">React.js</button>
            </li>
            <li>
                <button @click="redirect('angular')">Angular</button>
            </li>
        </ul>
    </nav>
</template>