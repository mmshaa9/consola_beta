<template>
  <div class="booking-desktop">
    <p class="booking-desktop__title">Оформление бронирования</p>

    <form class="booking-desktop__form">
      <div class="booking-desktop__block">
        <p class="booking-desktop__header">Введите ваши данные</p>

        <the-input
          v-model="lastName"
          helper-text="Фамилия"
          placeholder="Введите"
          class="booking-desktop__form_input"
          v1
        />

        <the-input
          v-model="name"
          helper-text="Имя"
          placeholder="Введите"
          class="booking-desktop__form_input"
          v1
        />

        <the-input
          v-model="patronymic"
          helper-text="Отчество"
          placeholder="Введите"
          class="booking-desktop__form_input"
          v1
        />

        <the-input
          v-model="phone"
          helper-text="Телефон"
          placeholder="Введите"
          class="booking-desktop__form_input"
          v1
          :mask="$store.state.mask.phone"
        />

        <the-input
          v-model="email"
          helper-text="Email"
          placeholder="Введите"
          class="booking-desktop__form_input"
          v1
        />

        <div class="booking-desktop__controls">
          <div class="booking-desktop__controls_back" @click="$router.go(-1)">
            <img
              class="booking-desktop__controls_image"
              src="@/static/svg/vektor-v3.svg"
              alt=""
            />
          </div>

          <the-button
            class="booking-desktop__controls_button"
            type="purple"
            @click="showSendOrder = true"
          >
            Забронировать
          </the-button>
        </div>
      </div>

      <div class="booking-desktop__block">
        <p class="booking-desktop__header">Подробности бронирования</p>

        <div class="booking-desktop__card">
          <v-img
            :src="require(`@/static/images/test-image-v1.jpg`)"
            :lazy-src="require(`@/static/images/test-image-v1.jpg`)"
            class="booking-desktop__card_image"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>

          <div class="booking-desktop__card_data">
            <p class="booking-desktop__card_data-title">Альбатрос</p>

            <p class="booking-desktop__card_data-text">Россия, Подмосковье</p>
          </div>
        </div>

        <div class="booking-desktop__category">
          <p class="booking-desktop__category_header">
            Образовательная программа «Солнышко»
          </p>

          <div class="booking-desktop__category_tags">
            <the-tag v2 class="booking-mobile__tag_item">Любой возраст</the-tag>

            <the-tag v2 class="booking-mobile__tag_item">Образование</the-tag>
          </div>
        </div>

        <the-block-children
          v-model="childrens"
          class="booking-desktop__childrens"
          v1
          is-gender
        />

        <div class="booking-desktop__period">
          <the-tag v1 class="booking-desktop__period_tag">
            8 октября - 16 октября
          </the-tag>

          <span class="booking-desktop__period_text">Изменить</span>
        </div>

        <div class="booking-desktop__payment">
          <span class="booking-desktop__payment_text">Всего к оплате:</span>

          <span class="booking-desktop__payment_cost">₽ 60 000</span>
        </div>
      </div>
    </form>

    <v-dialog v-model="showSendOrder" max-width="max-content">
      <the-send-order @close="showSendOrder = false" />
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue'

import TheTag from '@/components/UI/TheTag.vue'
import TheInput from '@/components/UI/TheInput.vue'
import TheBlockChildren from '@/components/TheBlockChildren/index.vue'
import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'BookingPageDesktop',

  components: {
    TheTag,
    TheInput,
    TheBlockChildren,
    TheButton,
    TheSendOrder: () => import('@/components/TheSendOrder.vue'),
  },

  data() {
    return {
      lastName: '',
      name: '',
      patronymic: '',
      phone: '',
      email: '',
      childrens: [],
      showSendOrder: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.booking-desktop {
  width: 100%;

  &__title {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 30px;
  }

  &__header {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 16px;
  }

  &__form {
    display: flex;
    gap: 230px;

    &_input {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__block {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__controls {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_back {
      height: 48px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: $white;
      cursor: pointer;
    }

    &_image {
      max-width: 20px;
      max-height: 20px;
    }

    &_button {
      max-width: 170px;
    }
  }

  &__card {
    border-radius: 6px;
    width: 100%;
    background-color: $white;
    margin-bottom: 16px;
    display: flex;
    overflow: hidden;

    &_image {
      max-width: 120px;
      height: 84px;
    }

    &_data {
      padding: 4px 10px;
    }

    &_data-title {
      font-weight: 500;
      font-size: 14px;
      color: $dark;
      margin-bottom: 4px;
    }

    &_data-text {
      font-size: 12px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 0;
    }
  }

  &__category {
    border-radius: 6px;
    width: 100%;
    padding: 10px;
    background-color: $white;
    margin-bottom: 16px;

    &_header {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: $dark;
      margin-bottom: 10px;
    }

    &_tags {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  &__period {
    width: 100%;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_text {
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $dark;
      border-bottom: 1px solid $dark;
      line-height: 100%;
      cursor: pointer;
    }
  }

  &__payment {
    display: flex;
    margin-top: auto;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 6px;
    background-color: $white;

    &_text {
      font-weight: 500;
      font-size: 14px;
      color: $dark;
    }

    &_cost {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }
  }
}
</style>
