<template>
  <div class="the-question-to-support">
    <div class="the-question-to-support__title">
      <span class="the-question-to-support__title_text">
        У вас есть вопросы ?
      </span>

      <img
        class="the-question-to-support__title_image"
        src="@/static/svg/close.svg"
        alt=""
        @click="$emit('close')"
      />
    </div>

    <the-input
      v-model="name"
      class="the-question-to-support__input"
      helper-text="Ваше Имя"
      placeholder="Введите"
      v2
    />

    <the-input
      v-model="lastName"
      class="the-question-to-support__input"
      helper-text="Ваша Фамилия"
      placeholder="Введите"
      v2
    />

    <the-input
      v-model="email"
      class="the-question-to-support__input"
      helper-text="Email"
      placeholder="Введите"
      v2
    />

    <the-input
      v-model="number"
      class="the-question-to-support__input"
      helper-text="Контактный номер"
      placeholder="+7"
      v2
      :mask="$store.state.mask.phone"
    />

    <the-input
      v-model="comment"
      class="the-question-to-support__input"
      placeholder="Комментарий..."
      v2
    />

    <the-button
      class="the-question-to-support__button"
      type="purple"
      @click="click"
    >
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
  name: 'TheQuestionToSupport',

  components: {
    TheButton,
    TheInput,
    TheSuccessWindow: () => import('@/components/TheSuccessWindow.vue'),
  },

  data() {
    return {
      showSuccessWindow: false,
      name: '',
      lastName: '',
      email: '',
      number: '',
      comment: '',
    }
  },

  methods: {
    click() {
      this.$emit('close')
      this.showSuccessWindow = true
    },
  },
})
</script>

<style lang="scss">
.the-question-to-support {
  @include stylesForModals;

  &__title {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_text {
      font-family: 'Inter';
      font-size: 18px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_image {
      cursor: pointer;
      height: 14px;
      width: 14px;
    }
  }

  &__input {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    width: 100%;
  }
}
</style>
