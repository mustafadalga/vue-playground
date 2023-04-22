<script lang="ts" setup>
import { computed, ref } from "vue"
import IconPlusCircle from "@/components/icons/IconPlusCircle.vue";

defineProps<{ placeholder: string }>();
const input = ref<string>("");
const minCharacterLength: number = 1;
const maxLength: number = 32;
const focus = ref<boolean>(false);
const emit = defineEmits<{
    (event: 'input', value: string): void
}>();
const iconFillClass = computed<string>(() => focus.value ? "fill-purple-500" : "fill-blue-500");

function handleKeyUpEvent() {
    if (input.value.length < minCharacterLength) return;

    handleInputEvent();
    emit('input', input.value);
    input.value = "";
}

function handleInputEvent() {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
</script>

<template>
    <label
            for="add"
            class="flex items-center justify-between gap-5 rounded-xl border border-solid h-12 lg:h-[3.25rem] p-3 cursor-pointer focus-within:border-purple-500">

        <input type="text"
               id="add"
               v-model="input"
               :placeholder="placeholder"
               @input="handleInputEvent"
               @focus="focus=true"
               @blur="focus=false"
               @keyup.enter="handleKeyUpEvent"
               class="w-full outline-0 placeholder-purple-500 text-blue-500 font-medium text-xs lg:text-sm font-switzer focus:placeholder-transparent"/>

        <IconPlusCircle :fill-class="iconFillClass"
                        @click="handleKeyUpEvent"
                        class="w-5 h-5 lg:w-6 lg:h-6 min-h-[1.25rem] min-w-[1.25rem] lg:min-h-[1.5rem] lg:min-w-[1.5rem]"/>
    </label>
</template>
