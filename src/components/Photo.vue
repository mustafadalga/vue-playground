<script lang="ts" setup>


import { inject, ref } from "vue";
import type { IAxiosWrapperConstants, IPhoto } from "@/types";

const $axios: IAxiosWrapperConstants = inject("$axios")!;
const photo = ref<IPhoto>();


/**
 * this function will fetch photo
 */
async function fetchPhoto(): Promise<void> {
    const url = "/photos/1";

    const response = await $axios.v1.get(url);
    photo.value = response.data;
}
</script>

<template>
    <section class="flex items-center flex-col">
        <button @click="fetchPhoto()" class="bg-blue-400 text-white px-10 py-3 rounded-lg">show Photo</button>

        <div v-if="photo" class="mt-20">
            <img :src="photo.url" alt="" class="w-80">
            <p>{{ photo.title }}</p>
        </div>

    </section>
</template>
