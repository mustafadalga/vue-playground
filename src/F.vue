<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits<{
  /**
   * Cancels everything
   */
  (event: 'cancel'): void
  /**
   * Save the world
   */
  (event: 'save', arg: number): void
}>()

defineExpose([
  /**
   * position of the dash offset
   */
  'strokeDashoffset'
])

const props = withDefaults(defineProps<{
      /**
       * The radius of the circle.
       */
      radius: number
      /**
       * The stroke width of the circle.
       */
      stroke: number
      /**
       * The percentage of the circle that is filled.
       */
      progress?: number
    }>(),
    {
      progress: 0,
    })

const normalizedRadius = props.radius - props.stroke * 2
const circumference = normalizedRadius * 2 * Math.PI

const strokeDashoffset = computed(() => {
  return circumference - props.progress / 100 * circumference
})

interface Option{
  checked: boolean,
  deniz:string,
  ankara:string,
}

/**
 * Returns a toggleOption object.
 * @param {Object} option - The option object.
 * @param {Boolean} option.checked - The checked state of the option.
 * @param {String} option.deniz - denizli
 * @param {Number} option.ankara - burada günsüz
 */
function deneme1(option:Option){
console.log("deneme1",option)
}

deneme1({checked:true,deniz:"",ankara:""})
deneme2({checked:true,deniz:"",ankara:""})

/**
 *
 * @param option
 */
function deneme2(option:Option){
  console.log("deneme2",option)
}
</script>
<template>
  <svg :height="radius * 2" :width="radius * 2" @click="convertTheThings(1); emit('save', circumference);">
    <circle stroke="#EBEBEB" fill="transparent" :stroke-width="stroke" :r="normalizedRadius" :cx="radius"
            :cy="radius" />
    <circle stroke="currentColor" fill="transparent" :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset }" :stroke-width="stroke" :r="normalizedRadius" :cx="radius" :cy="radius"
            stroke-linecap="round" />
  </svg>
</template>


<style scoped>
svg {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>