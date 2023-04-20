<script lang="ts" setup>
import store from "@/store";
import { computed } from "vue";
import type { IRepository } from "@/types";

const activeRepositoryIndex = computed<number>(() => store.getters.getActiveRepositoryIndex());
const activeRepository = computed<IRepository>(() => store.getters.getRepositories()[activeRepositoryIndex.value]);

function next() {
    store.mutations.setClickedButton("next")
    store.mutations.setActiveRepositoryIndex(activeRepositoryIndex.value + 1);
}

function prev() {
    store.mutations.setClickedButton("prev")
    store.mutations.setActiveRepositoryIndex(activeRepositoryIndex.value - 1);
}
</script>

<template>
    <section class="fixed inset-0 bg-black/60 z-50">
        <div class="h-screen sticky top-0 grid place-items-center p-8">
            <div class="flex flex-col gap-4 w-full max-w-[44rem] h-[40.625rem] overflow-y-auto rounded-3xl p-5 bg-white overflow-hidden shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),_0_8px_8px_-4px_rgba(16,24,40,0.03)]">

                <h1 class="text-3xl text-center">
                    {{ activeRepository.name }}
                </h1>

                <p class="text-2xl text-center ">{{ activeRepository.description }}</p>

                <a :href="activeRepository.html_url"
                   target="_blank"
                   class="my-10">
                    <img class="mx-auto max-h-80 hover:shadow-2xl"
                         :src="`https://source.unsplash.com/random/?software&${new Date().getTime()}`">
                </a>

                <div class="mt-auto grid grid-cols-2 gap-5">
                    <button
                            @click="prev"
                            class="w-full h-11 px-5 font-switzer font-semibold text-sm lg:text-base bg-purple-600 border-purple-600 text-white rounded-lg border border-solid transition shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-purple-900">
                        <span>Prev</span>
                    </button>
                    <button
                            @click="next"
                            class="w-full h-11 px-5 font-switzer font-semibold text-sm lg:text-base bg-purple-600 border-purple-600 text-white rounded-lg border border-solid transition shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-purple-900">
                        <span>Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>