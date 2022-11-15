<template>
  <div
    :class="[
      'the-checkbox',
      modelValue ? 'the-checkbox__purple' : 'the-checkbox__silver',
    ]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <img
      v-if="modelValue"
      class="the-checkbox__icon"
      src="@/static/svg/checkbox.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheCheckbox',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.the-checkbox {
  min-width: 20px;
  width: 20px;
  min-height: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &__icon {
    width: 12px;
    height: 10px;
  }

  &__silver {
    background-color: $silver;
  }

  &__purple {
    background-color: $purple;
  }
}
</style>
