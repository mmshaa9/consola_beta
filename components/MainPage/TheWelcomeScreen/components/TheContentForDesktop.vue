<template>
  <div class="the-content-for-desktop">
    <h2 class="the-content-for-desktop__title">отдых для всех детей</h2>

    <div class="the-content-for-desktop__content">
      <the-select
        v-model="position"
        helper-text="Куда едем?"
        class="the-content-for-desktop__select"
        v1
      />

      <the-select
        v-model="camp"
        helper-text="Тип лагеря"
        class="the-content-for-desktop__select"
        v1
      />

      <the-button type="purple" class="the-content-for-desktop__button">
        Подобрать
      </the-button>
    </div>

    <p class="the-content-for-desktop__text">Более 200 детских лагерей</p>
  </div>
</template>

<script lang="ts">
import Vue, { ref } from 'vue'

import TheSelect from '@/components/UI/TheSelect.vue'
import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'TheWelcomeScreenTheContentForDesktop',

  components: {
    TheSelect,
    TheButton,
  },

  setup() {
    const position = ref('Россия, Подмосковье')
    const camp = ref('Любой')

    return { position, camp }
  },
})
</script>

<style lang="scss" scoped>
.the-content-for-desktop {
  margin-top: auto;
  display: flex;
  flex-direction: column;

  &__title {
    font-family: 'Inter';
    font-size: 55px;
    text-transform: uppercase;
    color: $white;
    margin-bottom: 60px;
  }

  &__content {
    display: flex;
    margin-bottom: 212px;
  }

  &__select {
    margin-right: 16px;
    min-width: 270px;
    max-width: 270px;
  }

  &__button {
    min-width: 160px;
    max-width: 160px;
  }

  &__text {
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $white;
    margin-bottom: 48px;
  }
}
</style>
