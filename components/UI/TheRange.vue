<template>
  <div class="the-range">
    <div class="the-range__wrap-helper-text">
      <span class="the-range__helper-text">от 2 000</span>

      <span class="the-range__helper-text">до 200 000</span>
    </div>

    <v-range-slider
      :value="modelValue"
      :max="200000"
      :min="2000"
      :thumb-label="false"
      hide-details
      :thumb-color="'#9733EE'"
      :track-color="'#7b7f8c'"
      :track-fill-color="'#9733EE'"
      @input="$emit('update:modelValue', $event)"
    />

    <div class="the-range__wrap-counts">
      <input
        :value="modelValue[0]"
        class="the-range__count"
        @input="
          $emit('update:modelValue', [$event.target.value, modelValue[1]])
        "
      />

      <input
        :value="modelValue[1]"
        class="the-range__count"
        @input="
          $emit('update:modelValue', [$event.target.value, modelValue[0]])
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheRange',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: Array,
      default: () => [2000, 200000],
    },
    helperText: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.the-range {
  width: 100%;

  &__wrap-helper-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__helper-text {
    font-family: 'Inter';
    font-size: 12px;
    color: $grey;
  }

  &__wrap-counts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }

  &__count {
    width: 100%;
    border: none;
    background-color: $lightGrey;
    padding: 12px 15px;
    border-radius: 8px;
    font-family: 'Inter';
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $dark;
    outline: none;
  }
}
</style>
