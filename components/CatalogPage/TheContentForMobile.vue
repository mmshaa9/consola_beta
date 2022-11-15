<template>
  <div class="the-content-for-mobile">
    <div class="the-content-for-mobile__filter">
      <span class="the-content-for-mobile__filter_text">Найдено: 105</span>

      <span class="the-content-for-mobile__filter_button">
        Сбросить фильтр
      </span>
    </div>

    <the-button
      class="the-content-for-mobile__button"
      type="purple"
      @click="changeVisibleFilter(true)"
    >
      Фильтр
    </the-button>

    <div class="the-content-for-mobile__content">
      <the-card v-for="card in list" :key="card.id" :obj="card" />
    </div>

    <the-questions class="the-content-for-mobile__the-questions" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

import TheCard from '@/components/TheCard.vue'
import TheButton from '@/components/UI/TheButton.vue'
import TheQuestions from '@/components/TheQuestions/index.vue'

export default Vue.extend({
  name: 'CatalogPageTheContentForMobile',

  components: {
    TheButton,
    TheCard,
    TheQuestions,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapMutations({
      changeVisibleFilter: 'changeVisibleFilter',
    }),
  },
})
</script>

<style lang="scss" scoped>
.the-content-for-mobile {
  width: 100%;

  &__filter {
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_text {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_button {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      border-bottom: 1px solid $grey;
      color: $grey;
      line-height: 100%;
    }
  }

  &__button {
    margin-top: 4px;
    margin-bottom: 30px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }
}
</style>
