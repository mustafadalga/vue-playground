<script lang="ts" setup>
import IconCheckCircle from "@/components/icons/IconCheckCircle.vue";
</script>

<template>
    <div class="grid place-items-center w-full h-full border border-solid border-blue-100 rounded-[1.25rem] overflow-hidden">
        <div class="grid place-items-center h-16 w-16 scale-[5] rounded-full bg-green-200">
            <div class="grid place-items-center rounded-full bg-green-100 h-12 w-12 lg:w-[3.125rem] lg:h-[3.125rem]">
                <IconCheckCircle
                        class="w-6 h-6 lg:w-7 lg:h-7"
                        stroke-class="stroke-green-600"/>
            </div>
        </div>
    </div>
</template>