<script lang="ts" setup>
import { computed } from "vue";
import store from "@/store";
import type { Component } from "vue"
import IconMail from "@/components/icons/IconMail.vue";
import IconPersonPinCircle from "@/components/icons/IconPersonPinCircle.vue";
import IconTranslate from "@/components/icons/IconTranslate.vue";
import IconSkills from "@/components/icons/IconSkills.vue";
import IconDiversity from "@/components/icons/IconDiversity.vue";
import IconPerson from "@/components/icons/IconPerson.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

const iconComponents: Component[] = [
    IconPerson,
    IconMail,
    IconPersonPinCircle,
    IconTranslate,
    IconSkills,
    IconDiversity
]
const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());

function liClass(index: number): string {
    let classList: string = "";

    if (index < iconComponents.length) {
        classList += "w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block";
    }

    if (index < activeStepIndex.value) {
        classList += " after:border-green-500"
    } else if (index == activeStepIndex.value) {
        classList += " after:border-purple-500"
    } else {
        classList += " after:border-gray-200"
    }

    return classList;
}

function iconContainerClass(index: number): string {
    let classList: string = "";

    if (index < activeStepIndex.value) {
        classList = "border-green-500 bg-green-500";
    } else if (index == activeStepIndex.value) {
        classList = "border-purple-500";
    } else {
        classList = "border-gray-300"
    }

    return classList;
}

function iconClass(index: number): string {
    let classList: string = "";


    if (index < activeStepIndex.value) {
        classList += "fill-green-500";
    } else if (index == activeStepIndex.value) {
        classList += "fill-purple-500"
    } else {
        classList += "fill-gray-700"
    }

    return classList;
}
</script>

<template>
    <ul class="flex">
        <li v-for="(component,index) in iconComponents"
            :class="liClass(index+1)"
            class="flex items-center after:transition-colors after:delay-150 after:duration-150">
            <div
                :class="iconContainerClass(index+1)"
                class="grid place-items-center w-12 h-12 rounded-full shrink-0	border border-solid transition-colors">

                <IconCheck v-if="(index+1)<activeStepIndex"
                           stroke-class="stroke-white" class="w-5"/>
                <component
                    v-else
                    :is="component"
                    :class="iconClass(index+1)"
                    class="w-5 h-5 transition-colors"/>
            </div>
        </li>
    </ul>
</template>