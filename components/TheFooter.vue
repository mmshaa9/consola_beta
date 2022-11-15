<template>
  <div class="the-footer">
    <div class="my-container the-footer__container">
      <template v-if="$store.state.isMobile">
        <div class="the-footer__content">
          <v-img
            :src="require(`@/static/svg/Logo/logo-gold.svg`)"
            :lazy-src="require(`@/static/svg/Logo/logo-gold.svg`)"
            class="the-footer__logo"
          />

          <div class="the-footer__block">
            <p class="the-footer__text_main">О проекте</p>

            <p
              v-for="(link, i) in aboutProjectList"
              :key="i"
              :class="[
                'the-footer__text_item the-footer__pointer',
                { 'the-footer__no-mb': link.last },
              ]"
            >
              {{ link.name }}
            </p>
          </div>

          <div class="the-footer__block">
            <p class="the-footer__text_main">Соглашения</p>

            <p
              v-for="(link, i) in agreementsList"
              :key="i"
              :class="[
                'the-footer__text_item the-footer__pointer',
                { 'the-footer__no-mb': link.last },
              ]"
            >
              {{ link.name }}
            </p>
          </div>

          <div class="the-footer__block">
            <p class="the-footer__number">{{ phone }}</p>

            <p class="the-footer__time">{{ operatingTime }}</p>

            <p
              class="the-footer__text_item the-footer__no-mb the-footer__pointer"
            >
              {{ email }}
            </p>
          </div>

          <div class="the-footer__block">
            <the-button
              type="orange"
              class="the-footer__button"
              @click="support = !support"
            >
              Задать вопрос
            </the-button>

            <the-button
              type="orange"
              class="the-footer__button"
              @click="check = !check"
            >
              Стать партнером
            </the-button>
          </div>

          <div class="the-footer__content_social-links">
            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/vk.svg`)"
              :lazy-src="require(`@/static/svg/SocialNetworkIcons/vk.svg`)"
              class="the-footer__svg"
            />

            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/odnoklasniki.svg`)"
              :lazy-src="
                require(`@/static/svg/SocialNetworkIcons/odnoklasniki.svg`)
              "
              class="the-footer__svg"
            />

            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/telegram.svg`)"
              :lazy-src="
                require(`@/static/svg/SocialNetworkIcons/telegram.svg`)
              "
              class="the-footer__svg"
            />
          </div>

          <div class="the-footer__text the-footer__copyright">
            <p class="the-footer__text_item the-footer__no-mb">
              {{ copyright }}
            </p>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="the-footer__content_left">
          <div class="the-footer__content_grid">
            <div class="the-footer__block">
              <v-img
                :src="require(`@/static/svg/Logo/logo-gold.svg`)"
                :lazy-src="require(`@/static/svg/Logo/logo-gold.svg`)"
                class="the-footer__logo"
              />

              <p class="the-footer__number">{{ phone }}</p>

              <p class="the-footer__time">{{ operatingTime }}</p>

              <p
                class="the-footer__text_item the-footer__no-mb the-footer__pointer"
              >
                {{ email }}
              </p>
            </div>

            <div class="the-footer__block">
              <div class="the-footer__text_main">О проекте</div>

              <p
                v-for="(link, i) in aboutProjectList"
                :key="i"
                :class="[
                  'the-footer__text_item the-footer__pointer',
                  { 'the-footer__no-mb': link.last },
                ]"
              >
                {{ link.name }}
              </p>
            </div>

            <div class="the-footer__block">
              <div class="the-footer__text_main">Соглашения</div>

              <p
                v-for="(link, i) in agreementsList"
                :key="i"
                :class="[
                  'the-footer__text_item the-footer__pointer',
                  { 'the-footer__no-mb': link.last },
                ]"
              >
                {{ link.name }}
              </p>
            </div>
          </div>

          <div class="the-footer__text the-footer__copyright">
            <p class="the-footer__text_item the-footer__no-mb">
              {{ copyright }}
            </p>
          </div>
        </div>

        <div class="the-footer__content">
          <the-button
            type="orange"
            class="the-footer__button"
            @click="support = !support"
          >
            Задать вопрос
          </the-button>

          <the-button
            type="orange"
            class="the-footer__button"
            @click="check = !check"
          >
            Стать партнером
          </the-button>

          <div class="the-footer__content_social-links">
            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/vk.svg`)"
              :lazy-src="require(`@/static/svg/SocialNetworkIcons/vk.svg`)"
              class="the-footer__svg"
            />

            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/odnoklasniki.svg`)"
              :lazy-src="
                require(`@/static/svg/SocialNetworkIcons/odnoklasniki.svg`)
              "
              class="the-footer__svg"
            />

            <v-img
              :src="require(`@/static/svg/SocialNetworkIcons/telegram.svg`)"
              :lazy-src="
                require(`@/static/svg/SocialNetworkIcons/telegram.svg`)
              "
              class="the-footer__svg"
            />
          </div>
        </div>
      </template>
    </div>

    <v-dialog v-model="support" max-width="max-content">
      <the-question-to-support @close="support = false" />
    </v-dialog>

    <v-dialog v-model="check" max-width="max-content">
      <the-check-phone @close="check = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'TheFooter',

  components: {
    TheButton,
    TheQuestionToSupport: () =>
      import('@/components/TheQuestionToSupport/index.vue'),
    TheCheckPhone: () => import('@/components/TheCheckPhone.vue'),
  },

  data() {
    return {
      support: false,
      check: false,
      phone: '8 (495) 902-75-17',
      operatingTime: 'Время работы с 9:00 - 19:00',
      email: 'sk@consola.org',
      copyright: '© 2022 All rights reserved',
      aboutProjectList: [
        { name: 'Главная', path: '' },
        { name: 'О нас', path: '' },
        { name: 'Блог', path: '' },
        { name: 'Контакты', path: '', last: true },
      ],
      agreementsList: [
        { name: 'Пользовательское соглашение', path: '' },
        { name: 'Политика конфиденциальности', path: '' },
        { name: 'Согласие на обработку персональных данных', path: '' },
        { name: 'Использовании Cookies', path: '' },
        { name: 'Запрет на копирование материалов', path: '', last: true },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.the-footer {
  background-color: $white;
  padding-top: 24px;
  padding-bottom: 24px;

  @include desktop {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @include desktop {
      grid-template-columns: 1fr max-content;
    }
  }

  &__copyright {
    display: flex;
    justify-content: flex-start !important;

    @include desktop {
      transform: translateY(-50%);
    }
  }

  &__logo {
    width: 126px;
    height: 30px;
    max-width: 126px;
    max-height: 30px;
    margin-bottom: 30px;

    @include desktop {
      margin-bottom: 10px;
    }
  }

  &__number {
    font-family: 'Inter';
    font-size: 20px;
    line-height: 21px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 12px;
    cursor: pointer;

    @include desktop {
      margin-bottom: 4px;
    }
  }

  &__time {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 12px;

    @include desktop {
      margin-bottom: 4px;
    }
  }

  &__pointer {
    cursor: pointer;
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @include desktop {
      margin-bottom: 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include desktop {
      width: 164px;
    }

    &_grid {
      display: grid;
      grid-template-columns: max-content max-content 1fr;
      gap: 100px 90px;
    }

    &_social-links {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      @include desktop {
        justify-content: space-around;
        margin-top: 16px;
        margin-bottom: 0;
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @include desktop {
      margin-bottom: 0;
    }
  }

  &__link {
    width: max-content;
    font-weight: 500;
    font-size: 16px;
    color: $dark;
    text-decoration: none;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    @include desktop {
      font-size: 14px;
    }
  }

  &__button {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;

      @include desktop {
        margin-bottom: 16px;
      }
    }
  }

  &__svg {
    cursor: pointer;

    &:nth-child(1) {
      max-width: 34px;
      max-height: 21px;
      margin-right: 24px;

      @include desktop {
        margin-right: 0;
      }
    }

    &:nth-child(2) {
      max-width: 20px;
      max-height: 34px;
      margin-right: 24px;

      @include desktop {
        margin-right: 0;
      }
    }

    &:nth-child(3) {
      max-width: 28px;
      max-height: 26px;
    }
  }

  &__text {
    width: 100%;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    @include desktop {
      justify-content: flex-start;
    }

    &_main {
      font-weight: 500;
      font-size: 16px;
      line-height: 10px;
      width: 100%;
      color: $dark;
      margin-bottom: 20px;

      @include desktop {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        height: 30px;
      }
    }

    &_item {
      font-size: 14px;
      line-height: 15px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 12px;
    }
  }

  &__no-mb {
    margin-bottom: 0;
  }
}
</style>
