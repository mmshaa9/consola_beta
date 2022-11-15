<template>
  <div class="card-page">
    <div class="my-container">
      <h2
        v-if="$store.state.isDesktop"
        v-sanitize="name"
        class="card-page__title"
      />

      <div class="card-page__top">
        <div class="card-page__images">
          <v-img
            v-if="getPhotoPath('main')"
            :src="getPhotoPath('main')"
            :lazy-src="getPhotoPath('main')"
            class="card-page__images_main"
          />

          <the-not-found v-else class="card-page__images_main">
            нет изображения
          </the-not-found>

          <div v-if="$store.state.isDesktop" class="card-page__images_group">
            <v-img
              v-if="getPhotoPath('outdoor')"
              :src="getPhotoPath('outdoor')"
              :lazy-src="getPhotoPath('outdoor')"
              class="card-page__images_item"
            />

            <the-not-found v-else class="card-page__images_item">
              нет изображения
            </the-not-found>

            <v-img
              v-if="getPhotoPath('beach')"
              :src="getPhotoPath('beach')"
              :lazy-src="getPhotoPath('beach')"
              class="card-page__images_item"
            />

            <the-not-found v-else class="card-page__images_item">
              нет изображения
            </the-not-found>
          </div>
        </div>

        <div class="card-page__info">
          <div class="card-page__block">
            <h2
              v-if="$store.state.isMobile"
              v-sanitize="name"
              class="card-page__title"
            />

            <div v-if="$store.state.isMobile" class="card-page__control">
              <div class="card-page__control_top">
                <p class="card-page__control_info">
                  от
                  <span class="card-page__control_cost"> {{ cost }} ₽ </span> /
                  за {{ days }} дней
                </p>
              </div>

              <div class="card-page__control_bottom">
                <the-button
                  class="card-page__control_button"
                  type="purple"
                  @click="type = 'programs'"
                >
                  Выбрать программу
                </the-button>

                <button class="card-page__control_item">
                  <v-img
                    :src="require('@/static/svg/ProgramPage/message.svg')"
                    :lazy-src="require('@/static/svg/ProgramPage/message.svg')"
                    class="card-page__control_icon"
                  />
                </button>

                <button class="card-page__control_item">
                  <v-img
                    :src="require('@/static/svg/ProgramPage/like.svg')"
                    :lazy-src="require('@/static/svg/ProgramPage/like.svg')"
                    class="card-page__control_icon"
                  />
                </button>
              </div>
            </div>

            <p class="card-page__block_title">Категория</p>

            <div class="card-page__block_content">
              <the-tag v1 class="card-page__tags_item">
                {{ category }}
              </the-tag>
            </div>
          </div>

          <div class="card-page__block">
            <p class="card-page__block_title">Сезон</p>

            <div class="card-page__block_content">
              <button
                v-for="(item, i) in seasons"
                :key="i"
                class="card-page__season"
              >
                <v-img
                  :src="require(`@/static/svg/Seasons/${item}.svg`)"
                  :lazy-src="require(`@/static/svg/Seasons/${item}.svg`)"
                  class="card-page__season_item"
                />
              </button>
            </div>
          </div>

          <div class="card-page__block">
            <p class="card-page__block_title">Основная информация</p>

            <div class="card-page__block_content">
              <p class="card-page__block_not-info">отсутствует</p>
            </div>
          </div>

          <div class="card-page__block">
            <div class="card-page__block_city">
              <v-img
                :src="require('@/static/svg/point-v3.svg')"
                :lazy-src="require('@/static/svg/point-v3.svg')"
                class="card-page__block_city_point"
              />

              <p class="card-page__block_city_address">
                {{ city }}
              </p>
            </div>
          </div>

          <div v-if="$store.state.isDesktop" class="card-page__control">
            <div class="card-page__control_top">
              <p class="card-page__control_info">
                от
                <span class="card-page__control_cost"> {{ cost }} ₽ </span> / за
                {{ days }} дней
              </p>
            </div>

            <div class="card-page__control_bottom">
              <the-button
                class="card-page__control_button"
                type="purple"
                @click="type = 'programs'"
              >
                Выбрать программу
              </the-button>

              <button class="card-page__control_item">
                <v-img
                  :src="require('@/static/svg/ProgramPage/message.svg')"
                  :lazy-src="require('@/static/svg/ProgramPage/message.svg')"
                  class="card-page__control_icon"
                />
              </button>

              <button class="card-page__control_item">
                <v-img
                  :src="require('@/static/svg/ProgramPage/like.svg')"
                  :lazy-src="require('@/static/svg/ProgramPage/like.svg')"
                  class="card-page__control_icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-page__content">
        <div v-if="$store.state.isDesktop" class="card-page__btns">
          <button
            v-for="(btn, i) in btns"
            :key="i"
            :class="[
              'card-page__btns_item',
              {
                'card-page__btns_item--active': type === btn.type,
              },
            ]"
            @click="type = btn.type"
          >
            {{ btn.name }}
          </button>
        </div>

        <div class="card-page__data">
          <template v-if="type === 'about'">
            <the-about-camp :data="camp" />
          </template>

          <template v-else-if="type === 'programs'">
            <div class="card-page__programs">
              <the-card
                v-for="program in camp.program_list"
                :key="program.id"
                :obj="program"
                program
              />
            </div>
          </template>

          <template v-else>
            <p class="card-page__data_text">нет информации</p>
          </template>
        </div>

        <the-banner class="card-page__banner" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'
import TheTag from '@/components/UI/TheTag.vue'
import TheBanner from '@/components/CardPage/TheBanner.vue'

import { countDays, prepareCost } from '@/helpers/index.js'

import { Camp } from '@/helpers/interface'
import { ProgramListItem, PhotoType } from '@/helpers/type'

export default Vue.extend({
  name: 'CardPage',

  components: {
    TheButton,
    TheTag,
    TheBanner,
    TheAboutCamp: () => import('@/components/CardPage/TheAboutCamp.vue'),
    TheNotFound: () => import('@/components/TheNotFound.vue'),
    TheCard: () => import('@/components/TheCard.vue'),
  },

  async asyncData(ctx) {
    let camp = ({} as Camp) || {}
    let cost = 0
    let days = 0

    try {
      camp = await ctx.store.dispatch('get_svr_by_id', ctx.route.query.id)
      const programs = camp?.program_list

      if (programs) {
        programs.sort(
          (a: ProgramListItem, b: ProgramListItem) =>
            a?.date_list[0]?.cost - b?.date_list[0]?.cost
        )
        cost = prepareCost(programs[0].date_list[0].cost)
        days = countDays(
          programs[0].date_list[0].date_start,
          programs[0].date_list[0].date_finish
        )
      }
    } catch (err) {}

    return { camp, cost, days }
  },

  data() {
    return {
      type: 'about',
      btns: [
        { name: 'О лагере', type: 'about' },
        { name: 'Расписание програм', type: 'programs' },
        { name: 'Питание', type: 'food' },
        { name: 'Размещение', type: 'position' },
        {
          name: 'Безопасность',
          type: 'security',
        },
        { name: 'Сотрудники', type: 'personal' },
        { name: 'Отзывы', type: 'reviews' },
      ],
      seasons: ['summer', 'spring', 'autumn', 'winter'],
      camp: ({} as Camp) || {},
      cost: 0,
      days: 0,
    }
  },

  computed: {
    name(): string {
      return `${this.category}
      ${this?.camp?.name || ''}`
    },
    address(): string {
      return this?.camp?.address || ''
    },
    category(): string {
      return this?.camp?.type_id?.name || ''
    },
    city(): string {
      return this?.camp?.city_id?.name || ''
    },
  },

  methods: {
    getPhotoPath(type: string) {
      let result = ''
      const path = 'https://konsola.ru/cms/assets/'

      if (this.camp && this.camp.photo_list.length) {
        this.camp.photo_list.forEach((el: PhotoType) => {
          if (el.type === type) {
            result = `${path}${el.photo_id.id}`
          }
        })
      }

      return result
    },
  },
})
</script>

<style lang="scss" scoped>
.card-page {
  width: 100%;
  padding-bottom: 24px;

  @include desktop {
    padding-top: 40px;
    padding-bottom: 48px;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 16px;

    @include desktop {
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 30px;
    }
  }

  &__top {
    display: flex;
    flex-direction: column;

    @include desktop {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 48px;
    }
  }

  &__info {
    display: flex;
    width: 100%;
    flex-direction: column;

    @include desktop {
      width: 348px;
    }
  }

  &__images {
    display: flex;

    @include desktop {
      width: max-content;
      gap: 16px;
    }

    &_group {
      width: max-content;
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }

    &_main {
      width: 100%;
      max-width: 374px;
      height: 248px;
      border-radius: 10px 10px 0 0;
      margin-bottom: 30px;

      @include desktop {
        width: 434px;
        max-width: initial;
        height: 504px;
        border-radius: 10px;
        margin-bottom: 0;
      }
    }

    &_item {
      border-radius: 10px;

      &:first-child {
        width: 320px;
        height: 315px;
      }

      &:last-child {
        width: 320px;
        height: 174px;
      }
    }
  }

  &__block {
    display: flex;
    flex-direction: column;

    &_title {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      color: $dark;
      margin-bottom: 16px;
    }

    &_not-info {
      color: $grey;
      font-size: 12px;
    }

    &_city {
      cursor: pointer;
      display: flex;
      align-items: center;

      &_address {
        font-size: 14px;
        letter-spacing: $letterSpacing;
        border-bottom: 1px solid $dark;
        line-height: 100%;
        color: $dark;
        margin: 0;
      }

      &_point {
        width: 12px;
        height: 15px;
        max-width: 12px;
        max-height: 15px;
        margin-right: 4px;
      }
    }

    &_content {
      display: flex;
      margin-bottom: 20px;
      gap: 10px;
    }

    &_item {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__control {
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    @include desktop {
      margin-top: auto;
      margin-bottom: 0;
    }

    &_bottom {
      display: flex;
      justify-content: space-between;
    }
  }

  &__button {
    width: 220px;
  }

  &__btns {
    display: flex;
    height: 42px;

    &_item {
      background-color: transparent;
      display: flex;
      align-items: flex-start;
      border: none;
      height: 100%;
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-right: 34px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &--active {
        border-bottom: 2px solid $purple;
      }
    }
  }

  &__data {
    padding: 40px;
    background-color: $white;
    box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
    border-radius: 10px;

    &_text {
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 0;
    }
  }

  &__programs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  &__season {
    background-color: $white;
    width: 39px;
    height: 39px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &_item {
      max-width: 21px;
      max-height: 21px;
      fill: $dark;
    }
  }

  &__control {
    &_top {
      margin-bottom: 20px;
    }

    &_info {
      margin-bottom: 0;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      letter-spacing: $letterSpacing;
      color: $grey;
    }

    &_cost {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_bottom {
      display: flex;
      gap: 16px;
    }
  }

  &__banner {
    margin-top: 48px;
  }
}
</style>
