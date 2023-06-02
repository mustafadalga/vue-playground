<script>

/**
 * A simple button component
 * @component
 * @prop {string} buttonText - The text displayed on the button
 * @prop {boolean} [disabled=false] - Whether the button is disabled
 * bu component allaha emanet
 * bu component ile ulanıcı girecek
 * ne yapabildiğini
 * görebilmesi gerekiyor
 * @example
 * <script>
 *   function handle(){
 *     console.log("girdi")
 *   }
 *   <script>
 */
export default {
  name: 'ButtonComponent',
  props: {
    buttonText: {
      type: String,
      default: 'Click me'
    },
    date: {
      type: String,
      default: 'Click me'
    },
    saat: {
      type: String,
      default: 'Click me'
    },
    /**
     * burada kullanıcıdan bir tane gun sayısı alacagız
     * @type {number} gun - kişinin kaç gün yaşadığı
     */
    gun: {
      type: Number,
      default: 'Click me'
    }
  },
  emits: [ 'clicked' ],
  methods: {
    /**
     *
     *  Emits a 'clicked' event when the button is clicked */
    emitClickEvent () {
      this.$emit('clicked');
    },
    /**
     * Kardeş seni tanıyor muyum ?
     * @function
     * @param {string} name - name of the user
     * @param {number} age - age of the user
     */
    v1 (name) {
      console.log('clicked')
    },
    /**
     * Calculates the sum of two numbers.
     *
     * @function
     * @name ADD
     * @param {number} a - The first number in a sum.
     * @param {number} b - The second number in a sum.
     * @returns {number} - The sum of the two numbers.
     */
    add (a, b) {
      return a + b;
    },
    /**
     * Emits a 'clicked' event when the button is clicked.
     *
     * @param {Event} event - The click event.
     */
    emitClickEvent2(event) {
      this.$emit('clicked', event);
    }

  }
}
</script>

<template>
  <button @click="emitClickEvent">{{ buttonText }}</button>
</template>