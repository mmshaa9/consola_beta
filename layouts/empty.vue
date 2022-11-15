<template>
  <div class="">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'EmptyLayout',

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

<style lang="scss" scoped>
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
</style>
