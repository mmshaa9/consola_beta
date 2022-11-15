<template>
  <div class="welcome-screen">
    <div class="my-container">
      <div class="welcome-screen__burger" @click="drawer = true">
        <img
          src="@/static/svg/burger.svg"
          class="welcome-screen__burger_icon"
          alt=""
        />

        <img
          v-if="$store.state.isDesktop"
          src="@/static/svg/Logo/logo-white.svg"
          class="welcome-screen__burger_logo"
          alt=""
        />
      </div>

      <the-content-for-mobile
        v-if="$store.state.isMobile"
        class="welcome-screen__the-content-for-mobile"
      />

      <the-content-for-desktop
        v-if="$store.state.isDesktop"
        class="welcome-screen__the-content-for-desktop"
      />
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="max-content"
    >
      <the-menu />
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheWelcomScreen',

  components: {
    TheContentForMobile: () => import('./components/TheContentForMobile.vue'),
    TheContentForDesktop: () => import('./components/TheContentForDesktop.vue'),
    TheMenu: () => import('@/components/TheMenu.vue'),
  },

  data() {
    return {
      drawer: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.welcome-screen {
  height: 100vh;
  background-image: url('@/static/images/MainPage/welcome-screen-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;

  @include desktop {
    background-image: url('@/static/images/MainPage/welcome-screen-bg-desktop.jpg');
    height: 740px;
  }

  @media (max-width: 1169px) {
    @include desktop{
    font-size: 14px;
  }
}


  &__burger {
    width: max-content;
    display: flex;
    align-items: center;
    position: absolute;
    top: 32px;
    right: 24px;

    @include desktop {
      left: 24px;
      top: 20px;
    }

    &_icon {
      width: 30px;
      height: 16px;
      cursor: pointer;
    }

    &_logo {
      display: flex;
      margin-left: 20px;
      cursor: pointer;
      width: 126px;
      height: 30px;
    }
  }
}
</style>
