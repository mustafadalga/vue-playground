<script setup>
import { computed, inject, ref } from "vue";
import type { IAxiosWrapperConstants, IPhoto } from "@/types";

const $axios: IAxiosWrapperConstants = inject("$axios");


/**
 * Returns a phpt object.
 * @param {Object} option - The option object.
 * @param {Boolean} option.checked - The checked state of the option.
 * @param {String} option.deniz - denizli
 * @param {Number} option.ankara - burada günsüz
 */
const photo = ref<string>("");

/**
 * Returns a toggleOption object.
 * @param {Object} option - The option object.
 * @param {Boolean} option.checked - The checked state of the option.
 * @param {String} option.deniz - denizli
 * @param {Number} option.ankara - burada günsüz
 */
const a=computed<string>(()=>"ww")

/**
 * Returns a toggleOption object.
 * @param {Object} option - The option object.
 * @param {Boolean} option.checked - The checked state of the option.
 * @param {String} option.deniz - denizli
 * @param {Number} option.ankara - burada günsüz
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
