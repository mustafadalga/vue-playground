<script lang="ts" setup>
import store from "@/store";
import { ref, computed } from "vue";
import type { IOption, User } from "@/types";
import InputCheckbox from "@/components/input/InputCheckbox.vue";
import InputText from "@/components/input/InputText.vue";
import IconSkills from "@/components/icons/IconSkills.vue";


const maxLength: number = 20;
const showAddNewLanguageInput = computed(() => options.value.length < maxLength);
const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const userInformation = computed<User>(() => store.getters.getUserInformation());
const selectedOptions = ref<IOption[]>(userInformation.value.skills.map(option => ({
    id: option,
    value: option,
    checked: true
})));

const options = ref<IOption[]>([
    {
        id: "Vue.js",
        value: "Vue.js",
        checked: false
    },
    {
        id: "React.js",
        value: "React.js",
        checked: false
    },
    {
        id: "Javascript",
        value: "Javascript",
        checked: false
    },
    {
        id: "Typescript",
        value: "Typescript",
        checked: false
    },
    {
        id: "SCSS",
        value: "SCSS",
        checked: false
    },
]);
setStoreSelectedOptions();

function next() {
    store.mutations.setSkills(selectedOptions.value.map(skill => skill.id));
    store.mutations.setClickedButton("next");
    store.mutations.setActiveStepIndex(activeStepIndex.value + 1);
}

function prev() {
    store.mutations.setClickedButton("prev")
    store.mutations.setActiveStepIndex(activeStepIndex.value - 1);
}

function addNewLanguage(value: string) {
    options.value.push({
        id: value,
        value: value,
        checked: false
    });

    toggleOption({ checked: true, value: value })
}

function toggleOption(option: { checked: boolean, value: string }) {
    changeOptionStatus(option)

    if (option.checked) {
        selectedOptions.value.push({
            id: option.value,
            value: option.value,
            checked: true
        });
    } else {
        selectedOptions.value = selectedOptions.value.filter(selectedOption => selectedOption.id != option.value);
    }
}

function changeOptionStatus(option: { checked: boolean, value: string }) {
    options.value = options.value.map(optionItem => {
        if (optionItem.id == option.value) {
            optionItem.checked = option.checked;
        }
        return optionItem;
    });
}

function setStoreSelectedOptions(): void {
    selectedOptions.value.forEach(selectedOption => {
        const optionIndex = options.value.findIndex(option => option.id == selectedOption.id);

        if (optionIndex == -1) {
            options.value.push(selectedOption)
        } else {
            options.value[optionIndex] = selectedOption
        }
    })
}
</script>

<template>
    <section class="flex flex-col h-full">
        <slot title="Skills" :icon="IconSkills"/>

        <form class="grid gap-6 mt-10" @submit.prevent>

            <div class="grid gap-3 md:grid-cols-2 mb-3">
                <InputCheckbox v-for="option in options"
                               :option="option"
                               @input="toggleOption"/>
            </div>

            <InputText
                    v-if="showAddNewLanguageInput"
                    placeholder="+ Add Skill"
                    @input="addNewLanguage"
                    class="mt-4 mb-5"/>

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