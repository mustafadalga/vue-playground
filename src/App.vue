<script setup lang="ts">
import { useStore } from "vuex";
import type { User } from "@/types/types";
import { computed } from "vue";
import { key } from "@/store";

const store = useStore(key);
const userFromStore = computed<User>(() => store.getters.getUser);

function restore(){
    store.commit("restoreUser")
}
</script>

<template>
    <button @click="restore">restore User from Localstorage</button>
    <div id="app" class="p-10" >
        {{ userFromStore }}
    </div>
</template>
