<script lang="ts" setup>
import store from "@/store";
import { ref, computed } from "vue";
import type { User } from "@/types";
import IconMail from "@/components/icons/IconMail.vue";

const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const userInformation = computed<User>(() => store.getters.getUserInformation());

const form = ref<{ email: string, phone: string }>({
    email: userInformation.value.email,
    phone: userInformation.value.phone,
})

function next() {
    store.mutations.setContact(form.value.email, form.value.phone);
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
        <slot title="Contact" :icon="IconMail"/>

        <form class="grid gap-6 mt-10">
            <div class="grid gap-1">
                <label for="email" class="text-gray-900 pl-2 font-medium">Email</label>
                <label
                        for="email"
                        class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                    <input type="email"
                           id="email"
                           v-model="form.email"
                           placeholder="Enter your email"
                           class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                </label>
            </div>

            <div class="grid gap-1">
                <label for="phone" class="text-gray-900 pl-2 font-medium">Phone</label>
                <label
                        for="phone"
                        class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                    <input type="tel"
                           id="phone"
                           v-model="form.phone"
                           placeholder="Enter your phone"
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
                <span>Next</span>
            </button>
        </div>
    </section>
</template>