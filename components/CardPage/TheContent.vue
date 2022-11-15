<template>
  <div class="the-content">
    <template v-if="obj.type === 'program'">
      <div class="the-content__program">
        <p class="the-content__program_title">{{ obj.title }}</p>

        <p class="the-content__program_text">Ближайшие свободные даты:</p>

        <the-tag v2 class="the-content__program_tag">
          {{ obj.period }}
        </the-tag>

        <div class="the-content__program_info">
          от ₽
          <span class="the-content__program_cost">{{ obj.cost }}</span>

          <span
            class="the-content__program_more"
            @click="$router.push('/program')"
          >
            Подробнее
          </span>
        </div>
      </div>
    </template>

    <template v-else>
      <div v-if="obj.title" class="the-content__title">
        <p class="the-content__title_item">{{ obj.title }}</p>

        <div
          v-if="obj.title && !obj.text && obj.img"
          class="the-content__title_images"
        >
          <v-img
            v-for="(img, index) in obj.img"
            :key="index"
            :src="require(`@/static/images/${img.src}.jpg`)"
            :lazy-src="require(`@/static/images/${img.src}.jpg`)"
            class="the-content__title_image"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </div>
      </div>

      <p v-if="obj.text" class="the-content__text">
        {{ obj.text }}
      </p>

      <div
        v-if="!obj.title && !obj.text && obj.img"
        class="the-content__images"
      >
        <template v-if="!$store.state.isDesktop">
          <div class="the-content__images_list">
            <v-img
              v-for="(img, index) in obj.img"
              :key="index"
              :src="require(`@/static/images/${img.src}.jpg`)"
              :lazy-src="require(`@/static/images/${img.src}.jpg`)"
              class="the-content__image"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </div>

          <p class="the-content__images_text" @click="show = true">
            Смотреть все фото и видео
          </p>
        </template>

        <template v-else>
          <v-img
            :src="require(`@/static/images/${obj.img[0].src}.jpg`)"
            :lazy-src="require(`@/static/images/${obj.img[0].src}.jpg`)"
            class="the-content__image the-content__image_single"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>

          <div class="the-content__small-wrap-images">
            <v-img
              :src="require(`@/static/images/${obj.img[1].src}.jpg`)"
              :lazy-src="require(`@/static/images/${obj.img[1].src}.jpg`)"
              class="the-content__image"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>

            <v-img
              :src="require(`@/static/images/${obj.img[2].src}.jpg`)"
              :lazy-src="require(`@/static/images/${obj.img[2].src}.jpg`)"
              class="the-content__image"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </div>
        </template>
      </div>
    </template>

    <v-dialog v-model="show" fullscreen>
      <the-gallery :list="obj.img" @close="show = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardPageTheContent',

  components: {
    TheGallery: () => import('@/components/TheGallery.vue'),
  },

  props: {
    obj: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      show: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.the-content {
  width: 100%;

  &__program {
    width: 100%;
    background-color: $white;
    border-radius: 6px;
    padding: 20px;

    &_title {
      font-size: 16px;
      color: $dark;
      margin-bottom: 4px;
    }

    &_text {
      width: 100%;
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 6px;
    }

    &_tag {
      margin-bottom: 16px;
    }

    &_info {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_cost {
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
      display: flex;
      margin-left: 4px;
    }

    &_more {
      display: flex;
      margin-left: auto;
      font-size: 16px;
      letter-spacing: $letterSpacing;
      border-bottom: 1px solid $dark;
      line-height: 100%;
      color: $dark;
      cursor: pointer;
    }
  }

  &__title {
    width: 100%;
    margin-bottom: 12px;

    &_item {
      font-weight: 500;
      font-size: 15px;
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 12px;
    }

    &_images {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;

      @include desktop {
        flex-direction: row;
      }
    }

    &_image {
      width: 100%;
      height: 150px;
      border-radius: 6px;

      @include desktop {
        height: 400px;
        width: calc(50% - 8px);
      }
    }
  }

  &__text {
    font-size: 15px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 20px;
  }

  &__images {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include desktop {
      flex-wrap: nowrap;
    }

    &_list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &_text {
      font-size: 14px;
      line-height: 100%;
      border-bottom: 1px solid $purple;
      letter-spacing: $letterSpacing;
      color: $purple;
      margin: 0;
      margin-top: 20px;
      cursor: pointer;
    }
  }

  &__small-wrap-images {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  &__image {
    width: calc(50% - 5px);
    min-height: 120px;
    max-height: 120px;
    border-radius: 6px;

    &_single {
      @include desktop {
        width: 704px !important;
        min-height: 500px !important;
        max-height: 500px !important;
        margin-right: 16px !important;
      }
    }

    &:first-child {
      width: 100%;
      min-height: 180px;
      max-height: 180px;

      @include desktop {
        margin-bottom: 0;
        min-height: 244px;
        max-height: 244px;
      }
    }

    &:last-child {
      @include desktop {
        margin-top: auto;
        width: 322px;
        min-height: 244px;
        max-height: 244px;
      }
    }
  }
}
</style>
