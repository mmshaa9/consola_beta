<template>
  <div class="the-content-for-desktop">
    <the-filter catalog class="the-content-for-desktop__the-filter" />

    <div class="the-content-for-desktop__content">
      <div class="the-content-for-desktop__content_cards">
        <the-card
          v-for="card in list"
          :key="card.id"
          :obj="card"
          class="the-content-for-desktop__card"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheCard from '@/components/TheCard.vue'
import TheFilter from '@/components/TheFilter/index.vue'

export default Vue.extend({
  name: 'CatalogPageTheContentForDesktop',

  components: {
    TheCard,
    TheFilter,
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
.the-content-for-desktop {
  width: 100%;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 30px;
  padding-top: 40px;

  &__content {
    display: flex;
    flex-direction: column;

    &_cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      height: max-content;
    }
  }
}
</style>
