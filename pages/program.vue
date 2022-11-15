<template>
  <div class="program-page">
    <div class="my-container">
      <h2 v-sanitize="name" class="program-page__title" />

      <div class="program-page__info">
        <div class="program-page__images">
          <v-img
            v-if="$store.state.program.program_type_id.photo_id.id"
            :src="`https://konsola.ru/cms/assets/${$store.state.program.program_type_id.photo_id.id}`"
            :lazy-src="`https://konsola.ru/cms/assets/${$store.state.program.program_type_id.photo_id.id}`"
            class="program-page__image program-page__image_first"
          />

          <the-not-found
            v-else
            class="program-page__image program-page__image_first"
          >
            нет изображения
          </the-not-found>

          <div class="program-page__images_box">
            <v-img
              v-if="false"
              src=""
              lazy-src=""
              class="program-page__image program-page__image_second"
            />

            <the-not-found
              v-else
              class="program-page__image program-page__image_second"
            >
              нет изображения
            </the-not-found>

            <v-img
              v-if="false"
              src=""
              lazy-src=""
              class="program-page__image program-page__image_tree"
            />

            <the-not-found
              v-else
              class="program-page__image program-page__image_tree"
            >
              нет изображения
            </the-not-found>
          </div>
        </div>

        <div class="program-page__data">
          <div class="program-page__data_block">
            <p class="program-page__data_block_title">Категория</p>

            <div class="program-page__data_block_tags">
              <the-tag v1>{{ category }}</the-tag>
            </div>
          </div>

          <div class="program-page__data_block">
            <p class="program-page__data_block_title">Основная информация</p>

            <div class="program-page__data_block_options">
              <div
                v-for="(icon, i) in optionIcons"
                :key="i"
                :src="require('@/static/svg/ProgramPage/apple.svg')"
                class="program-page__data_block_option"
                :style="{
                  backgroundImage: `url(/svg/ProgramPage/${icon}.svg)`,
                }"
              />
            </div>
          </div>

          <div class="program-page__data_block">
            <div class="program-page__data_block_wrap">
              <v-img
                :src="require('@/static/svg/vektor-v4.svg')"
                :lazy-src="require('@/static/svg/vektor-v4.svg')"
                class="program-page__data_block_icon"
              />

              <p class="program-page__data_block_text">
                Детский лагерь «Альбатрос»
              </p>
            </div>

            <div class="program-page__data_block_wrap">
              <v-img
                :src="require('@/static/svg/point-v3.svg')"
                :lazy-src="require('@/static/svg/point-v3.svg')"
                class="program-page__data_block_icon"
              />

              <p class="program-page__data_block_text">Россия, Подмосковье</p>
            </div>
          </div>

          <div class="program-page__data_block">
            <p class="program-page__data_description">
              Программа физкультурно-спортивного направления лагеря дневного
              пребывания детей на базе МАОУ СОШ №8 им. Ц.Л. Куникова«здоровые
              дети – здоровая страна»
            </p>
          </div>

          <div class="program-page__data_cost">
            <p class="program-page__data_cost_text">
              от
              <span class="program-page__data_cost_span">₽ {{ cost }}</span>
              / за 10 дней
            </p>
          </div>

          <div class="program-page__data_actions">
            <the-button type="purple">Выбрать дату</the-button>

            <v-img
              :src="require('@/static/svg/ProgramPage/message.svg')"
              :lazy-src="require('@/static/svg/ProgramPage/message.svg')"
              class="program-page__data_actions_icon"
            />

            <v-img
              :src="require('@/static/svg/ProgramPage/like.svg')"
              :lazy-src="require('@/static/svg/ProgramPage/like.svg')"
              class="program-page__data_actions_icon"
            />
          </div>
        </div>
      </div>

      <div class="program-page__content">
        <ul class="program-page__content_tabs">
          <li
            v-for="(tab, i) in tabs"
            :key="i"
            :class="[
              'program-page__content_tabs_item',
              { 'program-page__content_tabs_item--active': tab.type === type },
            ]"
            @click="type = tab.type"
          >
            {{ tab.name }}
          </li>
        </ul>

        <div class="program-page__content_is">
          <p v-if="type === 'description'" v-sanitize="description" />

          <template v-if="type === 'camp'">
            тут будет описание лагеря
          </template>

          <template v-if="type === 'payment'"> тут будут цены </template>

          <template v-if="type === 'media'"> тут будут фото и видео </template>

          <template v-if="type === 'comment'"> тут будут отзывы </template>
        </div>
      </div>

      <the-banner class="program-page__banner" />

      <!-- <the-slider
        title="Похожие лагеря"
        :list="$store.state.blogs"
        class="program-page__slider"
        card
        arrows
        :count-slides="3"
      />

      <the-slider
        title="Недавно просмотренные"
        :list="$store.state.blogs"
        class="program-page__slider"
        card
        arrows
        :count-slides="3"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'
import TheTag from '@/components/UI/TheTag.vue'
import TheBanner from '~/components/CardPage/TheBanner.vue'
import TheSlider from '@/components/UI/TheSlider.vue'

export default Vue.extend({
  name: 'ProgramPage',

  components: {
    TheTag,
    TheButton,
    TheBanner,
    TheSlider,
    TheNotFound: () => import('@/components/TheNotFound.vue'),
  },

  async asyncData(ctx) {
    await ctx.store.dispatch('get_program_by_id', ctx.route.query.id)
  },

  data() {
    return {
      tabs: [
        { name: 'Описание программы', type: 'description' },
        { name: 'О лагере', type: 'camp' },
        { name: 'Стоимость и оплата', type: 'payment' },
        { name: 'Фото и видео', type: 'media' },
        { name: 'Отзывы', type: 'comment' },
      ],
      type: 'description',
      optionIcons: ['apple', 'security', 'education', 'games', 'pool'],
      cost: 0,
    }
  },

  computed: {
    name() {
      return this.$store.state.program
        ? `${this.$store.state.program.program_type_id.name} ${this.$store.state.program.name}`
        : ''
    },
    description() {
      return this.$store.state.program
        ? this.$store.state.program.description
        : ''
    },
    category() {
      return this.$store.state.program
        ? this.$store.state.program.program_type_id.name
        : ''
    },
  },
})
</script>

<style lang="scss" scoped>
.program-page {
  padding: 40px 0;

  &__title {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 32px;
  }

  &__info {
    display: flex;
    gap: 48px;
    margin-bottom: 48px;
  }

  &__images {
    width: max-content;
    display: flex;
    gap: 16px;

    &_box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &__image {
    border-radius: 10px;

    &_first {
      max-width: 434px;
      max-height: 504px;
      width: 434px;
      height: 504px;
    }

    &_second {
      max-width: 320px;
      max-height: 315px;
      width: 320px;
      height: 315px;
    }

    &_tree {
      max-width: 320px;
      max-height: 174px;
      width: 320px;
      height: 174px;
    }
  }

  &__data {
    width: 100%;
    display: flex;
    flex-direction: column;

    &_block {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      &_title {
        font-weight: 500;
        font-size: 14px;
        color: $dark;
      }

      &_tags,
      &_options {
        display: flex;
        gap: 10px;
      }

      &_option {
        width: 39px;
        height: 39px;
        max-width: 39px;
        max-height: 39px;
        background-size: contain;
        background-position: center center;
      }

      &_wrap {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;

        &:first-child {
          margin-bottom: 12px;
        }
      }

      &_icon {
        width: 10px;
        height: 12px;
        max-width: 10px;
        max-height: 12px;
      }

      &_text {
        font-size: 14px;
        letter-spacing: $letterSpacing;
        text-decoration-line: underline;
        color: $dark;
        margin-bottom: 0;
      }
    }

    &_description {
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
    }

    &_cost {
      display: flex;
      margin-top: auto;
      margin-bottom: 20px;

      &_text {
        font-family: 'Inter';
        font-size: 15px;
        letter-spacing: $letterSpacing;
        color: $grey;
        margin-bottom: 0;
      }

      &_span {
        font-weight: 500;
        font-size: 20px;
        letter-spacing: $letterSpacing;
        color: $dark;
      }
    }

    &_actions {
      display: flex;
      gap: 16px;

      &_icon {
        width: 48px;
        height: 48px;
        max-width: 48px;
        max-height: 48px;
        cursor: pointer;
      }
    }
  }

  &__content {
    &_tabs {
      display: flex;
      gap: 36px;
      padding: 0;

      &_item {
        list-style: none;
        font-size: 14px;
        letter-spacing: $letterSpacing;
        color: $grey;
        cursor: pointer;
        padding-bottom: 20px;

        &--active {
          color: $dark;
          font-weight: 500;
          border-bottom: 2px solid $purple;
        }
      }
    }

    &_is {
      background-color: $white;
      box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
      border-radius: 10px;
      padding: 40px;
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;

      & > p {
        margin-bottom: 0;
      }
    }
  }

  &__banner {
    margin-top: 48px;
  }

  &__slider {
    margin-bottom: 100px;
  }
}
</style>
