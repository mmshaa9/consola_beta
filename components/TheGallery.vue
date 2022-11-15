<template>
  <div class="the-gallery">
    <div class="the-gallery__header">
      <div class="my-container the-gallery__container">
        <v-img
          :src="require(`@/static/svg/vektor-v3.svg`)"
          :lazy-src="require(`@/static/svg/vektor-v3.svg`)"
          aspect-ratio="1"
          class="the-gallery__vektor"
          @click="$emit('close')"
        />

        <span class="the-gallery__count">{{ count + '/' + list.length }}</span>
      </div>
    </div>

    <div class="my-container">
      <div class="the-gallery__carousel">
        <v-img
          :src="require(`@/static/svg/vektor-v5.svg`)"
          :lazy-src="require(`@/static/svg/vektor-v5.svg`)"
          aspect-ratio="1"
          class="the-gallery__carousel_next the-gallery__carousel_vektor"
          @click="showNext"
        />

        <v-img
          :src="require(`@/static/svg/vektor-v5.svg`)"
          :lazy-src="require(`@/static/svg/vektor-v5.svg`)"
          aspect-ratio="1"
          class="the-gallery__carousel_prev the-gallery__carousel_vektor"
          @click="showPrev"
        />

        <VueSlickCarousel
          v-bind="settings"
          ref="carousel"
          class="the-gallery__carousel_item"
          :slides-to-show="1"
          :swipe="false"
        >
          <div
            v-for="(img, index) in list"
            :key="index"
            class="the-gallery__image"
            :style="{
              backgroundImage: 'url(' + `/images/${img.src}.jpg` + ')',
            }"
          />
        </VueSlickCarousel>
      </div>

      <div class="the-gallery__list">
        <v-img
          v-for="(img, index) in list"
          :key="index"
          :src="require(`@/static/images/${img.src}.jpg`)"
          :lazy-src="require(`@/static/images/${img.src}.jpg`)"
          class="the-gallery__list_item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheGallery',

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      switch: true,
      count: 1,
      settings: {
        arrows: false,
        speed: 500,
        infinite: true,
        slidesToScroll: 1,
      },
    }
  },

  methods: {
    showPrev() {
      setTimeout(() => {
        this.switch = true
      }, this.settings.speed)

      if (this.switch) {
        this.switch = false
        // @ts-ignore
        this.$refs.carousel.prev()
        this.count = this.count > 1 ? this.count - 1 : this.list.length
      }
    },
    showNext() {
      setTimeout(() => {
        this.switch = true
      }, this.settings.speed)

      if (this.switch) {
        this.switch = false
        // @ts-ignore
        this.$refs.carousel.next()
        this.count = this.count < this.list.length ? this.count + 1 : 1
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.the-gallery {
  width: 100%;
  height: 100%;
  background-color: $white;
  overflow-y: auto;
  padding-bottom: 24px;

  &__header {
    height: 78px;
    display: flex;
    align-items: center;
  }

  &__count {
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $grey;
  }

  &__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__vektor {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &__carousel {
    position: relative;

    &_item {
      height: 500px;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
    }

    &_vektor {
      position: absolute;
      top: 50%;
      z-index: 1;
      height: 36px;
      width: 18px;
    }

    &_next {
      right: 10px;
      transform: rotate(180deg) translateY(50%);
    }

    &_prev {
      transform: translateY(-50%);
      left: 10px;
    }
  }

  &__image {
    height: 500px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 148px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &_item {
      width: 100px;
      max-width: 100px;
      height: 100px;
      max-height: 100px;
      border-radius: 6px;
      overflow: hidden;
    }
  }
}
</style>
