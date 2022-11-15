<template>
  <div class="the-button" @click="$emit('click')">
    <div class="the-button__item">
      <p class="the-button__text">Куда едем?</p>
    </div>

    <img src="@/static/svg/point.svg" class="the-button__icon" alt="point" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheWelcomeScreenTheButton',
})
</script>

<style lang="scss" scoped>
.the-button {
  width: 100%;
  position: relative;
  cursor: pointer;

  &__item {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: $white;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  &__text {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin: 0;
  }

  &__icon {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
