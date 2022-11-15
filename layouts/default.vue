<template>
  <v-app class="the-layout">
    <the-header
      v-if="
        $route.path !== '/' && ($store.state.isMobile || $store.state.isDesktop)
      "
    />

    <div
      v-if="$store.state.isMobile || $store.state.isDesktop"
      class="the-layout__content"
    >
      <Nuxt />
    </div>

    <the-footer v-if="$store.state.isMobile || $store.state.isDesktop" />

    <v-dialog v-model="$store.state.showFilter" fullscreen>
      <the-filter />
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default Vue.extend({
  name: 'DefaultLayout',

  components: {
    TheHeader,
    TheFooter,
    TheFilter: () => import('@/components/TheFilter/index.vue'),
  },

  mounted() {
    this.updateWidth(document.documentElement.clientWidth)

    window.addEventListener('resize', () => {
      this.updateWidth(document.documentElement.clientWidth)
    })
  },

  methods: {
    ...mapMutations({ updateWidth: 'updateWidth' }),
  },
})
</script>

<style lang="scss">
html {
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@font-face {
  font-family: 'Ubuntu';
  font-weight: 300;
  font-display: swap;
  src: local('Ubuntu'), url('~assets/fonts/Ubuntu-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Ubuntu';
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu'),
    url('~assets/fonts/Ubuntu-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Ubuntu';
  font-weight: 500;
  font-display: swap;
  src: local('Ubuntu'),
    url('~assets/fonts/Ubuntu-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-display: swap;
  src: local('Inter'), url('~assets/fonts/Inter-Regular.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
  font-style: normal;
}

.my-container {
  @include stylesForContainer;
}

.the-layout {
  height: 100vh;
  width: 100vw;
  position: relative;

  &__content {
    background-color: $silver;
  }
}
</style>
