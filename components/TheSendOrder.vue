<template>
  <div class="the-send-order">
    <div class="the-send-order__title">
      <p class="the-send-order__title_text">Отправить заявку</p>

      <v-img
        :src="require(`@/static/svg/close.svg`)"
        :lazy-src="require(`@/static/svg/close.svg`)"
        class="the-send-order__title_image"
        @click="$emit('close')"
      />
    </div>

    <div class="the-send-order__block">
      <v-img
        :src="require(`@/static/images/test-image-v1.jpg`)"
        :lazy-src="require(`@/static/images/test-image-v1.jpg`)"
        class="the-send-order__block_image"
      />

      <div class="the-send-order__block_data">
        <p class="the-send-order__block_data_title">Альбатрос</p>

        <p class="the-send-order__block_data_text">Россия, Подмосковье</p>
      </div>
    </div>

    <the-input
      v-model="name"
      class="the-send-order__input"
      helper-text="Ваше Имя"
      placeholder="Введите"
      v2
    />

    <the-input
      v-model="number"
      class="the-send-order__input"
      helper-text="Контактный номер"
      placeholder="+7"
      v2
      :mask="$store.state.mask.phone"
    />

    <the-input
      v-model="comment"
      class="the-send-order__input"
      placeholder="Комментарий..."
      v2
    />

    <the-button class="the-send-order__button" type="purple" @click="click">
      Перезвоните мне
    </the-button>

    <v-dialog v-model="showSuccessWindow" max-width="max-content">
      <the-success-window @close="showSuccessWindow = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'
import TheInput from '@/components/UI/TheInput.vue'

export default Vue.extend({
  name: 'TheSendOrder',

  components: {
    TheButton,
    TheInput,
    TheSuccessWindow: () => import('@/components/TheSuccessWindow.vue'),
  },

  data() {
    return { showSuccessWindow: false, name: '', number: '', comment: '' }
  },

  methods: {
    click() {
      this.$emit('close')
      this.showSuccessWindow = true
    },
  },
})
</script>

<style lang="scss" scoped>
.the-send-order {
  @include stylesForModals;

  &__title {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 16px;

    &_text {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_image {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__block {
    display: flex;
    align-items: center;
    overflow: hidden;
    max-height: 70px;
    background: $white;
    box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);
    margin-bottom: 20px;
    border-radius: 5px 0 0 5px;

    &_padding {
      padding: 10px;
      flex-direction: column;
    }

    &_image {
      max-width: 70px;
      max-height: 70px;
      min-width: 70px;
      min-height: 70px;
    }

    &_data {
      margin-left: 16px;
      padding: 14px 14px 14px 0;

      &_title {
        font-weight: 500;
        line-height: 100%;
        font-size: 14px;
        color: $dark;
        margin-bottom: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &_text {
        font-size: 14px;
        line-height: 100%;
        letter-spacing: $letterSpacing;
        color: $grey;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &__input {
    margin-bottom: 20px;
  }
}
</style>
