<template>
  <div>
    <h1>
      {{ sum(1, 2) }}
    </h1>
  </div>
</template>
<script>
export default {
  created () {
    this.stringsStringStrings("2","e","3","d")
  },
  methods: {
    /**
     * Returns a toggleOption object.
     * @param {number} x - first number
     * @param {number} y - second number
     * @returns {number} - Return sum of x and y
     */
    sum (x, y) {
      return x + y;
    },
    // Parameters may be declared in a variety of syntactic forms
    /**
     * @param {string}  p1 - A string param.
     * @param {string=} p2 - An optional param (Google Closure syntax)
     * @param {string} [p3] - Another optional param (JSDoc syntax).
     * @param {string} [p4="test"] - An optional param with a default value
     * @returns {string} This is the result
     */
    stringsStringStrings (p1, p2, p3, p4) {
      // TODO
      console.log(p1 + " " + p2 + " " + p3 + "")
    }
  }
}

</script>

<style scoped>
h1 {
  font-size: 24px;
}
</style>