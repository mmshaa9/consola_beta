TheQuestions
<template>
  <div class="the-questions">
    <div class="the-questions__content">
      <p class="the-questions__content_title">Остались вопросы?</p>

      <p class="the-questions__content_text">
        Свяжитесь с техподдержкой и мы вам поможем.
      </p>

      <the-button
        class="the-questions__content_button"
        type="purple"
        @click="show = true"
      >
        Задать вопрос в техподдержку
      </the-button>
    </div>

    <v-dialog v-model="show" max-width="max-content">
      <the-question-to-support @close="show = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'TheQuestions',

  components: {
    TheButton,
    TheQuestionToSupport: () =>
      import('@/components/TheQuestionToSupport/index.vue'),
  },

  data() {
    return {
      show: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.the-questions {
  @include stylesForModals;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;

    &_title {
      width: 100%;
      font-family: 'Inter';
      font-size: 18px;
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 10px;
    }

    &_text {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 16px;
    }
  }
}
</style>
