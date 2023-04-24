<script lang="ts" setup>
import { onErrorCaptured } from "vue";
import { handleImportModuleError } from "@/utilities";
import type { ComponentPublicInstance } from "vue";
import { useRouter } from "vue-router";

interface IError extends Error {
    message: string;
}

const router = useRouter();
const importModuleErrors: readonly string[] = [
    "Failed to fetch dynamically imported module",
    "Failed to load module script"
];

router.onError(handleImportModuleError);
onErrorCaptured(handleError);

function handleError(error: IError, vm: ComponentPublicInstance<{}, any, any, any, any>, info: string): boolean {
    if (importModuleErrors.some(err => error.message.includes(err))) {
        handleImportModuleError(error);
        return false;
    }
    return true;
}
</script>

<template>
    <slot></slot>
</template>