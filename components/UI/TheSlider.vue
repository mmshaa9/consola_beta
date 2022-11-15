<template>
  <div class="the-slider">
    <div class="the-slider__controls">
      <h2 class="the-slider__title">{{ title }}</h2>

      <div v-if="arrows" class="the-slider__controls_arrows">
        <v-img
          :src="require(`@/static/svg/TheSlider/arrow.svg`)"
          :lazy-src="require(`@/static/svg/TheSlider/arrow.svg`)"
          class="the-slider__controls_arrow"
          alt="prev"
          @click="showPrev"
        />

        <v-img
          :src="require(`@/static/svg/TheSlider/arrow.svg`)"
          :lazy-src="require(`@/static/svg/TheSlider/arrow.svg`)"
          class="the-slider__controls_arrow"
          alt=""
          @click="showNext"
        />
      </div>
    </div>

    <vue-slick-carousel
      v-bind="settings"
      ref="carousel"
      :slides-to-show="countSlides"
    >
      <div v-for="(item, i) in list" :key="i" class="the-slider__slide">
        <the-card
          :obj="item"
          :blog="blog"
          :program="program"
          slider
          :card="card"
          class="the-slider__item"
        />
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheCard from '@/components/TheCard.vue'

export default Vue.extend({
  name: 'TheSlider',

  components: {
    TheCard,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    countSlides: {
      type: Number,
      default: 2,
    },
    arrows: {
      type: Boolean,
      default: false,
    },
    blog: {
      type: Boolean,
      default: false,
    },
    program: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    }
  },

  methods: {
    showPrev() {
      // @ts-ignore
      this.$refs.carousel.prev()
    },
    showNext() {
      // @ts-ignore
      this.$refs.carousel.next()
    },
  },
})
</script>

<style>
.slick-track {
  display: flex !important;
  gap: 12px;
}
</style>

<style lang="scss" scoped>
.the-slider {
  &__title {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 0;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    &_arrows {
      display: flex;
      gap: 32px;
    }

    &_arrow {
      height: 36px;
      width: 36px;
      min-height: 36px;
      min-width: 36px;
      max-height: 36px;
      max-width: 36px;
      cursor: pointer;

      &:first-child {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
