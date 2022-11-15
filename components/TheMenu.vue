<template>
  <div class="the-menu">
    <img class="the-menu__logo" src="@/static/svg/Logo/logo-gold.svg" alt="" />

    <nuxt-link
      v-for="(item, i) in $store.state.menu"
      :key="i"
      :obj="item"
      :to="item.path"
      :class="[
        'the-menu__link',
        { 'the-menu__link_active': $route.path === item.path },
      ]"
    >
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheMenu',
})
</script>

<style lang="scss" scoped>
.the-menu {
  width: 308px;
  padding-top: 40px;
  padding-left: 48px;
  padding-bottom: 40px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;

  &__logo {
    width: 126px;
    height: 30px;
    margin-bottom: 30px;
  }

  &__link {
    font-size: 18px;
    color: $dark;
    margin-bottom: 48px;
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }

    &_active {
      color: $purple;
    }
  }
}
</style>
