<template>
  <div class="the-check-phone">
    <p class="the-check-phone__title">Подтвердите номер телефона</p>

    <p class="the-check-phone__text">
      Введите код из SMS, отправленный на номер {{ phone }}
    </p>

    <the-input
      v-model="number"
      class="the-check-phone__input"
      helper-text="Введите код из SMS"
      placeholder="Введите"
      v2
      mask="####"
    />

    <the-button
      class="the-check-phone__button"
      type="purple"
      @click="$emit('close')"
    >
      Подтвердить
    </the-button>

    <the-button class="the-check-phone__button" type="grey">
      Отправить повторно через: {{ time }}
    </the-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'
import TheInput from '@/components/UI/TheInput.vue'

export default Vue.extend({
  name: 'TheCheckPhone',

  components: {
    TheButton,
    TheInput,
  },

  data() {
    return {
      time: '03.59',
      phone: '+7 495 120 28 99',
      number: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.the-check-phone {
  @include stylesForModals;

  &__title {
    font-weight: 500;
    font-size: 17px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 10px;
  }

  &__text {
    font-family: 'Inter';
    font-size: 15px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 16px;
  }

  &__input {
    margin-bottom: 16px;
  }

  &__button {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
