<template>
  <div class="the-drop-menu">
    <the-button>Любой регион</the-button>

    <div class="the-drop-menu__content">
      <div
        v-for="item in list"
        :key="item.id"
        class="the-drop-menu__item"
        @click="$emit('select', item.name)"
      >
        <img
          class="the-drop-menu__point"
          src="@/static/svg/point-v2.svg"
          alt=""
        />

        <span class="the-drop-menu__text">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'TheSelectTheDropMenu',

  components: {
    TheButton,
  },

  setup() {
    const list = [
      { name: 'Россия, Подмосковье', id: 1 },
      { name: 'Россия, Камчатка', id: 2 },
      { name: 'Россия, Краснодарский край', id: 3 },
    ]

    return { list }
  },
})
</script>

<style lang="scss" scoped>
.the-drop-menu {
  width: 100%;
  background-color: $white;
  padding: 20px;

  &__item {
    width: 100%;
    display: flex;
    margin-top: 22px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__text {
    width: 100%;
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $dark;
  }

  &__point {
    height: 20px;
    width: 20px;
    margin-right: 4px;
  }
}
</style>
