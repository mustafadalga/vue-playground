<script lang="ts" setup>
import store from "@/store";
import { ref, computed } from "vue";
import type { IOption, User } from "@/types";
import InputRadio from "@/components/input/InputRadio.vue";
import IconPersonPinCircle from "@/components/icons/IconPersonPinCircle.vue";

const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const userInformation = computed<User>(() => store.getters.getUserInformation());
const selectedOption = ref<IOption>({
    id: userInformation.value.gender,
    value: userInformation.value.gender,
    checked: true
});

const options = ref<IOption[]>([
    {
        id: "Male",
        value: "Male",
        checked: false
    },
    {
        id: "Female",
        value: "Female",
        checked: false
    },
    {
        id: "Prefer not to say",
        value: "Prefer not to say",
        checked: false
    },
]);
setStoreSelectedOptions();

function next() {
    store.mutations.setGender(selectedOption.value.id);
    store.mutations.setClickedButton("next");
    store.mutations.setActiveStepIndex(activeStepIndex.value + 1);
}

function prev() {
    store.mutations.setClickedButton("prev")
    store.mutations.setActiveStepIndex(activeStepIndex.value - 1);
}


function toggleOption(option: { checked: boolean, value: string }) {
    changeOptionStatus(option)

    selectedOption.value = {
        id: option.value,
        value: option.value,
        checked: true
    }
}

function changeOptionStatus(option: { checked: boolean, value: string }) {
    options.value = options.value.map(optionItem => {
        optionItem.checked = optionItem.id == option.value ? true : false
        return optionItem;
    });
}

function setStoreSelectedOptions(): void {
    options.value = options.value.map(optionItem => {
        if (optionItem.id == selectedOption.value.id) {
            optionItem.checked = true
        }
        return optionItem;
    });
}
</script>

<template>
    <section class="flex flex-col h-full">
        <slot title="Gender" :icon="IconPersonPinCircle"/>


        <form class="grid gap-6 mt-10" @submit.prevent>

            <div class="grid gap-3 mb-3">
                <InputRadio v-for="option in options"
                            :option="option"
                            name="gender"
                            @input="toggleOption"/>
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