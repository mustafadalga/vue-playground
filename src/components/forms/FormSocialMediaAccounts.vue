<script lang="ts" setup>
import store from "@/store";
import { ref, computed } from "vue";
import type { ISocialProfiles, User } from "@/types";
import IconDiversity from "@/components/icons/IconDiversity.vue";

const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const userInformation = computed<User>(() => store.getters.getUserInformation());

const form = ref<ISocialProfiles>({
    instagram: userInformation.value.socialProfiles.instagram,
    twitter: userInformation.value.socialProfiles.twitter,
    linkedin: userInformation.value.socialProfiles.linkedin,
})

function next() {
    store.mutations.setSocialProfiles(form.value);
    store.mutations.setClickedButton("next");
    store.mutations.setActiveStepIndex(activeStepIndex.value + 1);
}

function prev() {
    store.mutations.setClickedButton("prev")
    store.mutations.setActiveStepIndex(activeStepIndex.value - 1);
}
</script>

<template>
    <section class="flex flex-col h-full">
        <slot title="Social Media" :icon="IconDiversity"/>

                <form class="grid gap-6 mt-10">
                    <div class="grid gap-1">
                        <label for="instagram" class="text-gray-900 pl-2 font-medium">Instagram</label>
                        <label
                                for="instagram"
                                class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                            <input type="text"
                                   id="instagram"
                                   v-model="form.instagram"
                                   placeholder="Enter your instagram address"
                                   class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                        </label>
                    </div>

                    <div class="grid gap-1">
                        <label for="twitter" class="text-gray-900 pl-2 font-medium">Twitter</label>
                        <label
                                for="twitter"
                                class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                            <input type="text"
                                   id="twitter"
                                   v-model="form.twitter"
                                   placeholder="Enter your twitter address"
                                   class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                        </label>
                    </div>

                    <div class="grid gap-1">
                        <label for="linkedin" class="text-gray-900 pl-2 font-medium">Linkedin</label>
                        <label
                                for="linkedin"
                                class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                            <input type="text"
                                   id="linkedin"
                                   v-model="form.linkedin"
                                   placeholder="Enter your linkedin address"
                                   class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                        </label>
                    </div>
                </form>

                <div class="mt-auto flex justify-center gap-5">
                    <button
                            @click="prev"
                            class="w-full max-w-[10rem] h-11 px-5 font-switzer font-semibold text-sm lg:text-base bg-purple-600 border-purple-600 text-white rounded-lg border border-solid transition shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-purple-900">
                        <span>Prev</span>
                    </button>
                    <button
                            @click="next"
                            class="w-full max-w-[10rem] h-11 px-5 font-switzer font-semibold text-sm lg:text-base bg-purple-600 border-purple-600 text-white rounded-lg border border-solid transition shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-purple-900">
                        <span>Finish</span>
                    </button>
                </div>
    </section>
</template>