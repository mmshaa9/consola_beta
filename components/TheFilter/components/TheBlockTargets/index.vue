<template>
  <div class="the-block-targets">
    <p class="the-block-targets__title">Цели</p>

    <the-select v-model="vektor" :helper-text="'Направление лагеря'" />

    <div class="the-block-targets__tags">
      <the-tag
        v-for="obj in targets"
        :key="obj.id"
        class="the-block-targets__tag"
        :obj="obj"
        close
        type="filter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { ref } from 'vue'

import TheSelect from '@/components/UI/TheSelect.vue'
import TheTag from '@/components/UI/TheTag.vue'

export default Vue.extend({
  name: 'TheBlockTrgets',

  components: {
    TheSelect,
    TheTag,
  },

  setup() {
    const vektor = ref('Выберите направления')
    const targets = [
      { name: 'Верховая езда', id: 1 },
      { name: 'Спорт', id: 2 },
      { name: 'Образование', id: 3 },
      { name: 'Рисование', id: 4 },
      { name: 'Программирование', id: 5 },
    ]

    return { vektor, targets }
  },
})
</script>

<style lang="scss" scoped>
.the-block-targets {
  width: 100%;

  &__title {
    width: 100%;
    text-align: center;
    font-family: 'Inter';
    font-size: 18px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 20px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  &__tag {
    margin-right: 10px;
    margin-bottom: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
