<template>
  <div class="the-map">
    <div class="my-container">
      <div class="the-map__title">
        <p class="the-map__title_text">Местоположение</p>

        <img
          class="the-map__title_image"
          src="@/static/svg/close.svg"
          alt=""
          @click="$emit('close')"
        />
      </div>

      <yandex-map class="the-map__item" :coords="coords" :zoom="10">
        <ymap-marker
          :coords="coords"
          marker-id="123"
          hint-content="some hint"
        />
      </yandex-map>

      <div class="the-map__data">
        <p class="the-map__data_name">
          {{ name }}
        </p>

        <p class="the-map__data_address">
          {{ address }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default Vue.extend({
  name: 'TheMap',

  components: { yandexMap, ymapMarker },

  data() {
    return {
      name: 'Детский лагерь «Альбатрос»',
      address: 'Россия, Подмосковье, ул. 2-Я Звенигородская',
      // eslint-disable-next-line no-loss-of-precision
      coords: [54.82896654088406, 39.831893822753904],
    }
  },
})
</script>

<style lang="scss" scoped>
.the-map {
  width: 100vw;
  height: 100vh;
  background-color: $white;
  padding: 24px 0;

  &__title {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

    &_text {
      margin: 0;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: $letterSpacing;
      color: $dark;
      width: 100%;
      text-align: center;
    }

    &_image {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__item {
    width: 324px;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
  }

  &__data {
    margin-top: 16px;

    &_name {
      font-family: 'Inter';
      font-weight: 500;
      font-size: 14px;
      color: $dark;
      margin: 0;
    }

    &_address {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin: 0;
    }
  }
}
</style>
