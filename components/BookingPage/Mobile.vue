<template>
  <div class="booking-mobile">
    <p class="booking-mobile__title">Оформление бронирования</p>

    <div class="booking-mobile__block">
      <v-img
        :src="require(`@/static/images/test-image-v1.jpg`)"
        :lazy-src="require(`@/static/images/test-image-v1.jpg`)"
        class="booking-mobile__block_image"
      >
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>

      <div class="booking-mobile__block_data">
        <p class="booking-mobile__block_data_title">Альбатрос</p>

        <p class="booking-mobile__block_data_text">Россия, Подмосковье</p>
      </div>
    </div>

    <div class="booking-mobile__block booking-mobile__block_padding">
      <p class="booking-mobile__block_data_title">
        Образовательная программа «Зеркало»
      </p>

      <div class="booking-mobile__tag">
        <the-tag v2 class="booking-mobile__tag_item">Любой возраст</the-tag>

        <the-tag v2 class="booking-mobile__tag_item">Образование</the-tag>
      </div>
    </div>

    <div class="booking-mobile__form">
      <p class="booking-mobile__form_title">Введите ваши данные</p>

      <the-input
        v-model="lastName"
        helper-text="Фамилия"
        placeholder="Введите"
        class="booking-mobile__form_input"
        v1
      />

      <the-input
        v-model="name"
        helper-text="Имя"
        placeholder="Введите"
        class="booking-mobile__form_input"
        v1
      />

      <the-input
        v-model="patronymic"
        helper-text="Отчество"
        placeholder="Введите"
        class="booking-mobile__form_input"
        v1
      />

      <the-input
        v-model="phone"
        helper-text="Телефон"
        placeholder="Введите"
        class="booking-mobile__form_input"
        v1
        :mask="$store.state.mask.phone"
      />

      <the-input
        v-model="email"
        helper-text="Email"
        placeholder="Введите"
        class="booking-mobile__form_input"
        v1
      />

      <the-block-children
        v-model="childrens"
        class="booking-mobile__form_the-block-children"
        v1
        is-gender
      />

      <div class="booking-mobile__form_period">
        <the-tag v1 class="booking-mobile__form_period_tag">
          8 октября - 16 октября
        </the-tag>

        <span class="booking-mobile__form_period_text">Изменить</span>
      </div>

      <div class="booking-mobile__form_payment">
        <span class="booking-mobile__form_payment_text">Всего к оплате:</span>

        <span class="booking-mobile__form_payment_cost">₽ 60 000</span>
      </div>
    </div>

    <div class="booking-mobile__form_controls">
      <div class="booking-mobile__form_controls_back" @click="$router.go(-1)">
        <img
          class="booking-mobile__form_controls_image"
          src="@/static/svg/vektor-v3.svg"
          alt=""
        />
      </div>

      <the-button
        class="booking-mobile__form_controls_the-button"
        type="purple"
        @click="showSendOrder = true"
      >
        Забронировать
      </the-button>
    </div>

    <v-dialog v-model="showSendOrder" max-width="max-content">
      <the-send-order @close="showSendOrder = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheTag from '@/components/UI/TheTag.vue'
import TheInput from '@/components/UI/TheInput.vue'
import TheBlockChildren from '@/components/TheBlockChildren/index.vue'
import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'BookingPageMobile',

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
.booking-mobile {
  width: 100%;

  &__title {
    text-align: center;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: $letterSpacing;
    color: $dark;
  }

  &__block {
    display: flex;
    overflow: hidden;
    background: $white;
    box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
    border-radius: 8px;
    margin-bottom: 10px;

    &_padding {
      padding: 10px;
      flex-direction: column;
      margin-bottom: 30px;
    }

    &_image {
      width: 120px;
      height: 84px;
    }

    &_data {
      padding: 4px 10px;

      &_title {
        font-family: 'Inter';
        font-size: 14px;
        color: $dark;
        margin-bottom: 4px;
      }

      &_text {
        font-size: 12px;
        letter-spacing: $letterSpacing;
        color: $grey;
        margin-bottom: 0;
      }
    }
  }

  &__tag {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__form {
    margin-bottom: 30px;

    &_title {
      width: 100%;
      margin-bottom: 16px;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_input {
      margin-bottom: 16px;
    }

    &_the-block-children {
      margin-top: 16px;
      margin-bottom: 30px;
    }

    &_period {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      &_text {
        display: flex;
        margin-left: auto;
        font-size: 14px;
        letter-spacing: $letterSpacing;
        color: $dark;
        border-bottom: 1px solid $dark;
        line-height: 100%;
      }
    }

    &_payment {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: $white;
      box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
      border-radius: 6px;
      padding: 10px;

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

    &_controls {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &_back {
        height: 46px;
        width: 46px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;
        cursor: pointer;
      }

      &_the-button {
        width: 150px;
      }
    }
  }
}
</style>
