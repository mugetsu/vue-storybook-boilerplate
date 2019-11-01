<template>
  <button
    class="button"
    :style="{ color, borderColor: color }"
    :class="{ rounded }"
    @click="onClick"
    @dblclick="onDoubleClick">
    {{ label }}
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      label: [String, Number],
      rounded: Boolean,
      color: {
        type: String,
        default: '#42b983'
      }
    },
    methods: {
      onClick($event) {
        this.$emit('click', $event);
      },
      onDoubleClick($event) {
        this.$emit('dblclick', $event);
      }
    }
  }
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
