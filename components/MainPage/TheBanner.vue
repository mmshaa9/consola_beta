<template>
  <div class="the-banner">
    <v-img
      :src="require(`@/static/images/MainPage/child.jpg`)"
      :lazy-src="require(`@/static/images/MainPage/child.jpg`)"
      class="the-banner__child"
      alt=""
    />

    <div class="the-banner__content">
      <p class="the-banner__title the-banner__title_first">Подключитесь к</p>

      <p class="the-banner__title the-banner__title_second">Consola.me</p>

      <p class="the-banner__text">
        Здесь можно оформить и купить путевку в два клика
      </p>

      <button class="the-banner__button">
        Стать партнером

        <v-img
          :src="require(`@/static/svg/MainPage/vektor.svg`)"
          :lazy-src="require(`@/static/svg/MainPage/vektor.svg`)"
          class="the-banner__button_icon"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainPageTheBanner',
})
</script>

<style lang="scss" scoped>
.the-banner {
  height: 450px;
  max-height: 450px;
  min-height: 450px;
  position: relative;
  filter: drop-shadow(0px 3px 4px rgba(153, 155, 168, 0.15));
  background-color: $lightGrey;
  border-radius: 6px;
  overflow: hidden;

  &__child {
    height: inherit;
    max-height: inherit;
    min-height: inherit;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__content {
    position: absolute;
    top: 69px;
    left: 48px;
  }

  &__title {
    color: $dark;
    letter-spacing: $letterSpacing;
    font-weight: 500;
    margin-bottom: 0;

    &_first {
      font-size: 65px;
      line-height: 65px;
    }
    @media (max-width: 1169px) {
      &_first {
        font-size: 30px;
      }
    }

    &_second {
      font-size: 100px;
      line-height: 100px;
    }
    @media (max-width: 1169px) {
      &_second {
        font-size: 45px;
      }
    }
  }

  &__text {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  @media (max-width: 1169px) {
    &__text {
      font-size: 14px;
    }
  }

  &__button {
    position: relative;
    padding: 20px 40px;
    border-radius: 10px;
    border: 2px solid $purple;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: $letterSpacing;
    color: $purple;

    &_icon {
      position: absolute;
      bottom: -10px;
      right: -10px;
      width: 32px;
      height: 36px;
      max-width: 32px;
      max-height: 36px;
    }
  }
}
</style>
