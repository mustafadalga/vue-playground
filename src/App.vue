<script lang="ts" setup>
import { RouterView } from "vue-router";
import ErrorBoundary from "@/components/ErrorBoundary.vue";
import store from "@/store";
import { computed } from "vue";

const fullPath = computed<string>(() => store.getters.getCurrentFullPath())
const no = computed<string>(() => store.getters.getNo())
</script>
<template>
    <ErrorBoundary>
        <div id="app">
            <ul>
                <li>
                    <router-link to="/">Page vue.js</router-link>
                </li>
                <li>
                    <router-link to="/react">Page react.js</router-link>
                </li>
                <li>
                    <router-link to="/angular">Page angular</router-link>
                </li>
            </ul>
            <RouterView/>
            {{ fullPath }} - {{ no }}
        </div>
    </ErrorBoundary>
</template>