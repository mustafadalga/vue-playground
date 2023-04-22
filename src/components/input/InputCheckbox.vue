<script lang="ts" setup>
import IconCheck from "@/components/icons/IconCheck.vue";

interface Props {
    option: {
        id: string,
        value: string,
        checked: boolean
    }
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
    <label :for="option.id"
           :class="option.checked ? 'border-purple-500':'border-gray-200'"
           class="flex items-center justify-between gap-5 rounded-xl border border-solid min-h-[3rem] lg:min-h-[3.375rem] p-3 lg:p-4 cursor-pointer hover:border-purple-500">

        <label class="font-switzer font-medium text-gray-700 !leading-5 text-xs lg:text-sm cursor-pointer line-clamp-1 whitespace-nowrap"
               :for="option.id">
            {{ option.value }}
        </label>

        <input type="checkbox"
               :id="option.id"
               :value="option.id"
               :checked="option.checked"
               class="hidden peer"
               @input="handleChange">

        <label :for="option.id"
               class="grid place-items-center rounded border border-solid border-blue-500 min-w-[1rem] min-h-[1rem] w-4 h-4 cursor-pointer [&>svg]:hidden peer-checked:[&>svg]:block peer-checked:border-0 peer-checked:bg-purple-600">
            <IconCheck class="w-3 h-3" stroke-class="stroke-white"/>
        </label>
    </label>
</template>