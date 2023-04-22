<script lang="ts" setup>
import { computed, Transition } from "vue";
import type { Component } from "vue"
import store from "@/store";
import FormHeader from "./FormHeader.vue";
import FormFullName from "./FormFullName.vue";
import FormContact from "./FormContact.vue";
import FormLanguages from "./FormLanguages.vue";
import FormSkills from "./FormSkills.vue";
import FormGender from "./FormGender.vue";
import FormSocialMediaAccounts from "./FormSocialMediaAccounts.vue";
import FormCongratulations from "./FormCongratulations.vue";

interface Steps {
    [key: number]: Component
}

const steps: Steps = {
    1: FormFullName,
    2: FormContact,
    3: FormGender,
    4: FormLanguages,
    5: FormSkills,
    6: FormSocialMediaAccounts,
    7: FormCongratulations
}

const activeStepIndex = computed<number>(() => store.getters.getActiveStepIndex());
const activeStep = computed<Component>(() => steps[activeStepIndex.value as keyof typeof steps]);
const clickedButton = computed<string>(() => store.getters.getClickedButton());
const transition = computed<{ enter: string, leave: string }>(() => {
    if (clickedButton.value == "prev") {
        return {
            enter: "animate-[slide-right-to-center_.2s_forwards]",
            leave: "animate-[slide-center-to-left_.2s_forwards]"
        }
    }
    return {
        enter: "animate-[slide-left-to-center_.2s_forwards]",
        leave: "animate-[slide-center-to-right_.2s_forwards]"
    }
});
</script>

<template>
    <section class="fixed inset-0 bg-black/60 z-50">
        <div class="h-screen sticky top-0 grid place-items-center p-8">
            <div class="flex flex-col gap-4 w-full max-w-[44rem] h-[40.625rem] overflow-y-auto rounded-3xl p-5 bg-white overflow-hidden shadow-[0_20px_24px_-4px_rgba(168,85,247,0.08),_0_8px_8px_-4px_rgba(168,85,247,0.03)]">

                <FormHeader/>

                <Transition :enter-active-class="transition.enter"
                            :leave-active-class="transition.leave" :name="activeStepIndex.toString()">
                    <component :is="activeStep"
                               :key="activeStepIndex"
                               v-slot="props">

                        <div class="mx-auto grid gap-2 place-items-center">
                            <component
                                    :is="props.icon"
                                    class="stroke-purple-500 fill-purple-500 w-32	lg:w-40"/>
                            <h1 class="leading-1 text-3xl lg:text-4xl text-purple-500">{{ props.title }}</h1>
                        </div>
                    </component>
                </Transition>
            </div>
        </div>
    </section>
</template>