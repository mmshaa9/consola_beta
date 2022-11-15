<template>
  <div class="the-content-for-mobile">
    <div class="my-container">
      <template v-if="!!data.photo_list[0]">
        <v-img
          :src="image"
          :lazy-src="image"
          class="the-content-for-mobile__image"
        />
      </template>

      <template v-else>
        <the-not-found class="the-content-for-mobile__image">
          нет изображения
        </the-not-found>
      </template>

      <h2 class="the-content-for-mobile__title">{{ data.name }}</h2>

      <div class="the-content-for-mobile__position">
        <p class="the-content-for-mobile__position_title">Расположение</p>

        <p class="the-content-for-mobile__position_data">
          <img
            class="the-content-for-mobile__position_point"
            src="@/static/svg/point-v3.svg"
            alt=""
          />

          <span
            class="the-content-for-mobile__position_text"
            @click="showMap = true"
          >
            {{ data.address }}
          </span>
        </p>
      </div>

      <div class="the-content-for-mobile__category">
        <p class="the-content-for-mobile__category_title">Категория</p>

        <div class="the-content-for-mobile__category_list">
          <the-tag class="the-content-for-mobile__category_item" v1>
            Здоровье
          </the-tag>
        </div>
      </div>

      <div class="the-content-for-mobile__the-toggle-row">
        <!-- <the-toggle-row
          v-for="row in $store.state.card.childrens"
          :key="row.id"
          class="the-content-for-mobile__the-toggle-row_item"
          :obj="row"
          content
        /> -->
      </div>

      <the-button
        class="the-content-for-mobile__button"
        type="purple"
        @click="$router.push('/booking')"
      >
        Забронировать
      </the-button>
    </div>

    <v-dialog v-model="showMap" fullscreen>
      <the-map @close="showMap = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'
import TheTag from '@/components/UI/TheTag.vue'

export default Vue.extend({
  name: 'CardPageTheContentForMobile',

  components: {
    TheButton,
    TheTag,
    TheNotFound: () => import('@/components/TheNotFound.vue'),
    TheMap: () => import('@/components/TheMap.vue'),
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      showMap: false,
    }
  },

  computed: {
    image() {
      let result = ''
      if (this.data.photo_list) {
        this.data.photo_list.forEach((element: any) => {
          if (element.type === 'main') {
            result = `https://konsola.ru/cms/assets/${element.photo_id.id}`
          }
        })
      }
      return result
    },
  },
})
</script>

<style lang="scss" scoped>
.the-content-for-mobile {
  width: 100%;

  &__image {
    width: 100%;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin: 30px 0;
  }

  &__position {
    width: 100%;
    margin-bottom: 30px;

    &_data {
      display: flex;
      align-items: center;
      margin-bottom: 0;
    }

    &_title {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      color: $dark;
      margin-bottom: 12px;
    }

    &_text {
      font-size: 14px;
      letter-spacing: $letterSpacing;
      border-bottom: 1px solid $dark;
      line-height: 100%;
      color: $dark;
      cursor: pointer;
      margin-bottom: 0;
    }

    &_point {
      margin-right: 6px;
      width: 12px;
      height: 16px;
    }
  }

  &__category {
    width: 100%;
    margin-bottom: 30px;

    &_title {
      font-weight: 500;
      font-size: 16px;
      color: $dark;
      margin-bottom: 12px;
    }

    &_list {
      display: flex;
      flex-wrap: wrap;
    }

    &_item {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__the-toggle-row {
    width: 100%;

    &_item {
      margin-bottom: 30px;
    }
  }

  &__button {
    position: sticky;
    bottom: 16px;
  }
}
</style>
