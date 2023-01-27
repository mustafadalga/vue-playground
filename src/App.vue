<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const isPopupOpen = ref(false);

function changeModalState(status: boolean) {
  isPopupOpen.value = status
}
</script>

<template>
  <div class="flex justify-center pt-10">
    <button @click="changeModalState(true)" type="button" class="w-full max-w-[11.25rem] bg-white border border-solid border-emerald-500 text-emerald-500 text-center rounded-lg font-switzer font-medium text-xs lg:text-sm h-9 xl:h11 2xl:h-12">
      + Ipsum
    </button>

    <Transition enter-active-class="animate-slide-down" leave-active-class="animate-slide-up">
      <Modal v-if="isPopupOpen" :changeModalState="changeModalState" />
    </Transition>
  </div>
</template>
