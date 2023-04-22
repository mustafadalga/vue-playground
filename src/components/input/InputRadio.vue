<script lang="ts" setup>
import IconCheck from "@/components/icons/IconCheck.vue";

interface Props {
    option: {
        id: string,
        value: string,
        checked: boolean
    },
    name: string
}


interface Emits {
    (event: 'input', value: { checked: boolean, value: string }): void
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('input', {
        checked: target.checked,
        value: target.value
    });
};
</script>

<template>
    <label class="flex items-center gap-3"
    :for="option.id">
        <input type="radio"
               :id="option.id"
               :name="name"
               :value="option.id"
               :checked="option.checked"
               @input="handleChange"
               class="peer hidden" />
        <label :for="option.id" class="grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white border border-solid border-gray-200 peer-checked:border-purple-500 peer-checked:bg-purple-500 lg:h-8 lg:w-8">
            <IconCheck  class="w-3 h-3" stroke-class="stroke-white"/>
        </label>

        <label :for="option.id"
            class="grid max-w-xs font-medium text-gray-700 text-xs lg:text-sm">
        {{ option.value }}
        </label>
    </label>
</template>