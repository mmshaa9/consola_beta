<template>
  <div class="the-content-for-mobile">
    <img
      src="@/static/svg/Logo/logo-for-mobile.svg"
      class="the-content-for-mobile__logo"
      alt=""
    />

    <p class="the-content-for-mobile__text">Отдых для всех детей</p>

    <the-local-button
      class="the-content-for-mobile__button"
      @click="changeVisibleFilter(true)"
    />

    <img
      src="@/static/svg/vektor-v2.svg"
      class="the-content-for-mobile__vektor"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

import TheLocalButton from './TheButton.vue'

export default Vue.extend({
  name: 'TheWelcomeScreenTheContentForMobile',

  components: {
    TheLocalButton,
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
  margin-top: 338px;

  &__logo {
    width: 116px;
    height: 82px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 24px;
  }

  &__text {
    width: 100%;
    font-size: 18px;
    text-align: center;
    letter-spacing: $letterSpacing;
    color: $white;
  }

  &__button {
    margin: 106px auto 0 auto;

    @include desktop {
      display: none;
    }
  }

  &__vektor {
    width: 32px;
    height: 32px;
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
