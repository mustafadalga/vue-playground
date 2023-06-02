<script setup lang="ts">
/**
 * A simple button component
 * @constructor Button
 */

/**
 * props variables
 *
 * @property {string} color - background color of the button
 * @property {number} width - button width
 * @property {number} height - button height
 * @property {Function} sum - sum function that takes x and y and returns the sum of x and y
 */
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  width: Number,
  height: Number,
  sum: {
    type: Function,
    required: true,
  },
});

/**
 * This method logs the input parameters to the console.
 * @param {string} text - user text input
 */
function summarize(text) {
  console.log("summarization...");
}

/**
 * The function
 * @param {number} x - one input number
 * @returns {number} This is the result
 */
function increase(x) {
  return x + 1;
}
</script>
