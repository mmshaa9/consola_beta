<template>
  <div class="the-cards">
    <div class="my-container">
      <h2 class="the-cards__title">Каталог детских лагерей</h2>

      <div class="the-cards__list">
        <the-card
          v-for="item in list"
          :key="item.id"
          class="the-cards__item"
          :obj="item"
        />
      </div>

      <the-button
        type="purple"
        class="the-cards__button"
        @click="$router.push('/catalog')"
      >
        Перейти к выбору лагеря
      </the-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheCard from '@/components/TheCard.vue'

export default Vue.extend({
  name: 'TheCards',

  components: {
    TheCard,
    TheButton: () => import('@/components/UI/TheButton.vue'),
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.the-cards {
  padding: 30px 0;
  background-color: transparent;
  width: 100%;

  @include desktop {
    padding: 48px 0 0 0;
  }

  &__title {
    font-size: 18px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 20px;
    font-weight: 500;

    @include desktop {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }

  &__list {
    display: grid;
    gap: 30px;

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__button {
    display: flex;
    margin-top: 48px;

    @include desktop {
      width: 240px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
