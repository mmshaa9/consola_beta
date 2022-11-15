<template>
  <div :class="['the-tag', { 'the-tag__v1': v1 }, { 'the-tag__v2': v2 }]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTag',

  props: {
    v1: {
      type: Boolean,
      default: false,
    },
    v2: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.the-tag {
  width: max-content;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 15px;
  letter-spacing: $letterSpacing;
  color: $purple;
  cursor: default;

  &__v1 {
    background-color: $white;
    box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
  }

  &__v2 {
    background-color: $silver;
  }
}
</style>
