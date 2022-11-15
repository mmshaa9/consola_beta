<template>
  <div
    :class="[
      'the-input',
      { 'the-input__white': v1 },
      { 'the-input__light-grey': v2 },
    ]"
  >
    <p v-if="helperText" class="the-input__helper-text">{{ helperText }}</p>

    <input
      v-mask="mask ? mask : ''"
      class="the-input__item"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheInput',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    helperText: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    v1: {
      type: Boolean,
      default: false,
    },
    v2: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.the-input {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 8px;

  &__white {
    background-color: $white;
  }

  &__light-grey {
    background-color: $lightGrey;
  }

  &__helper-text {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 0;
  }

  &__item {
    width: 100%;
    height: 22px;
    outline: none;
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $dark;

    &::placeholder {
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }
  }
}
</style>
