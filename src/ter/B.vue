<template>
  <div></div>
</template>

<script>
/**
 * A simple button component
 * @constructor ButtonComponent
 * @example
 * <ButtonComponent :name="name" /
 */

export default {
  name: "chakan-deldd",
  created () {
    this.deneme1(1,2)
  },
  methods: {
    /**
     * This method logs the input parameters to the console.
     *
     * @method
     * @param {number} x - The first input number
     * @param {number} y - The second input number
     */
    deneme1 (x, y) {
      console.log("deneme1", x, y)
    }
  },
}
</script>

<style scoped>
svg {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
