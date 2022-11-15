<template>
  <button
    :class="[
      'the-button',
      { 'the-button__white': !type },
      { 'the-button__grey': type === 'grey' },
      { 'the-button__light': type === 'light' },
      { 'the-button__purple': type === 'purple' },
      { 'the-button__orange': type === 'orange' },
    ]"
    :type="submit ? 'submit' : 'button'"
    @click="$emit('click')"
  >
    <p
      :class="[
        'the-button__text',
        { 'the-button__text--purple': !type },
        { 'the-button__text--grey': type === 'grey' },
        { 'the-button__text--light': type === 'light' },
        { 'the-button__text--white': type === 'purple' || type === 'orange' },
      ]"
    >
      <slot />
    </p>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheButton',

  props: {
    type: {
      type: String,
      default: '',
    },
    submit: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.the-button {
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 0;
  display: flex;
  align-items: center;

  &__text {
    width: 100%;
    font-size: 16px;
    text-align: center;
    letter-spacing: $letterSpacing;
    margin-bottom: 0;

    &--purple {
      color: $purple;
    }

    &--light {
      color: $purple;
      letter-spacing: $letterSpacing;
    }

    &--grey {
      color: $grey;
    }

    &--white {
      font-family: 'Inter';
      color: $white;
    }
  }

  &__white {
    border: 1px solid $purple;
  }

  &__grey {
    box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
  }

  &__light {
    background-color: transparent;
    border: 1px solid $purple;
  }

  &__purple {
    background-color: $purple;
  }

  &__orange {
    background-color: $orange;
  }
}
</style>
