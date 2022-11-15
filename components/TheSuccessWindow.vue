<template>
  <div class="the-success-window">
    <v-img
      :src="require(`@/static/svg/success.svg`)"
      :lazy-src="require(`@/static/svg/success.svg`)"
      class="the-success-window__image"
    />

    <p class="the-success-window__title">Спасибо!</p>

    <p class="the-success-window__text">
      <span>Ваша заявка на бронирование принята</span>

      <span>Ожидайте звонка менеджера</span>
    </p>

    <the-button
      class="the-success-window__button"
      type="purple"
      @click="$emit('close')"
    >
      Ок
    </the-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'TheSuccessWindow',

  components: {
    TheButton,
  },
})
</script>

<style lang="scss" scoped>
.the-success-window {
  @include stylesForModals;

  &__image {
    height: 124px;
    width: 180px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    margin-top: 24px;
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 0;
  }

  &__text {
    width: 100%;
    font-size: 14px;
    text-align: center;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
  }

  &__button {
    @include desktop {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 284px;
    }
  }
}
</style>
