<script setup lang="ts">
import { computed, ref } from "vue";

enum StatusCode {
  Ok = "Ok",
  Invalid = "Invalid"
}

const displayedNumber = ref<string>("");
const maxDigitThreshold: number = 4;
const pinNumber: number = 2024;
const statusMessage = ref<StatusCode | null>(null);
const setTimeOutMilliSeconds: number = 3000;
const inputClass = computed<string>(() => {
  if (statusMessage.value) {
    return statusMessage.value == StatusCode.Ok ? "bg-green-400" : "bg-red-400"
  }
  return "bg-transparent"
})


function handleInput(num: number) {
  displayedNumber.value += num;

  if (displayedNumber.value.length == maxDigitThreshold) {

    statusMessage.value = is4DigitPinValid(Number(displayedNumber.value)) ? StatusCode.Ok : StatusCode.Invalid;

    resetState();
  }
}

function onClear() {
  displayedNumber.value = "";
}

function is4DigitPinValid(pin: number): boolean {
  return pin == pinNumber
}

function resetState() {
  setTimeout(() => {
    statusMessage.value = null;
    displayedNumber.value = "";
  }, setTimeOutMilliSeconds)
}
</script>

<template>
  <section class="grid gap-3 border border-solid border-black w-80 p-8">

    <div :class="[inputClass,'h-8 text-center border border-solid border-black']">
      {{ statusMessage ? statusMessage : displayedNumber }}
    </div>


    <div class="grid grid-cols-3 gap-3">
      <button type="button" :disabled="!!statusMessage" v-for="num in [1,2,3,4,5,6,7,8,9]"
              :key="num"
              @click="handleInput(num)"
              class="border border-solid border-black ">
        {{ num }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <span></span>
      <button type="button" :disabled="!!statusMessage"
              @click="handleInput(0)"

              class="border border-solid border-black">
        0
      </button>
      <button type="button" :disabled="!!statusMessage"
              @click="onClear"
              class="border border-solid border-black">
        Clear
      </button>
    </div>

  </section>
</template>