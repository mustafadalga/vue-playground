<script lang="ts" setup>
import store from "@/store";
import IconPerson from "@/components/icons/IconPerson.vue";
import { ref, computed } from "vue";
import type { User } from "@/types";

const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const userInformation = computed<User>(() => store.getters.getUserInformation());

const form = ref<{ firstName: string, lastName: string }>({
    firstName: userInformation.value.firstName,
    lastName: userInformation.value.lastName,
})

function next() {
    store.mutations.setFullName(form.value.firstName, form.value.lastName);
    store.mutations.setClickedButton("next");
    store.mutations.setActiveStepIndex(activeStepIndex.value + 1);
}
</script>

<template>
    <section class="flex flex-col h-full">
        <slot title="Full Name" :icon="IconPerson"/>

        <form class="grid gap-6 mt-10">
            <div class="grid gap-1">
                <label for="firstName" class="text-gray-900 pl-2 font-medium">First Name</label>
                <label
                        for="firstName"
                        class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                    <input type="text"
                           id="firstName"
                           v-model="form.firstName"
                           placeholder="Enter your name"
                           class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                </label>
            </div>

            <div class="grid gap-1">
                <label for="lastName" class="text-gray-900 pl-2 font-medium">Last Name</label>
                <label
                        for="lastName"
                        class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

                    <input type="text"
                           id="lastName"
                           v-model="form.lastName"
                           placeholder="Enter your last name"
                           class="w-full outline-0 placeholder-gray-500 text-black font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>
                </label>
            </div>
        </form>

        <div class="mt-auto flex justify-center gap-5">
            <button
                    @click="next"
                    class="w-full max-w-[10rem] h-11 px-5 font-switzer font-semibold text-sm lg:text-base bg-purple-600 border-purple-600 text-white rounded-lg border border-solid transition shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-purple-900">
                <span>Next</span>
            </button>
        </div>
    </section>
</template>