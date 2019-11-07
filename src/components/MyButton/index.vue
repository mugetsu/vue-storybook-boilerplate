<template>
  <button
    class="button"
    :style="{ color, borderColor: color }"
    :class="{ rounded }"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <span>{{ label }}</span>
    <!-- @slot This is the default slot -->
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  span {
    color: blue;
  }
}
</style>

<script>
/**
 * Use `MyButton` to highlight key info with a predefined status.
 */
export default {
  name: "MyButton",
  props: {
    /**
     * Test label
     */
    label: [String, Number],
    /**
     * Test rounded
     */
    rounded: Boolean,
    /**
     * Test color
     */
    color: {
      type: String,
      default: "#42b983"
    }
  },
  methods: {
    onClick($event) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      this.$emit("click", $event);
    },
    onDoubleClick($event) {
      /**
       * Emitted when the button is double clicked.
       * @event doubleClick
       * @type {Event}
       */
      this.$emit("dblclick", $event);
    }
  }
};
</script>

<style>
.rounded {
  border-radius: 5px;
}
.button {
  border: 3px solid;
  padding: 10px 20px;
  background-color: white;
  outline: none;
}
</style>
