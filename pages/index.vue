<template>
  <div class="main-page">
    <the-welcome-screen />

    <the-cards :list="result" />

    <div class="my-container">
      <the-banner class="main-page__banner" />
    </div>

    <the-blog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheWelcomeScreen from '@/components/MainPage/TheWelcomeScreen/index.vue'
import TheCards from '@/components/MainPage/TheCards.vue'
import TheBanner from '@/components/MainPage/TheBanner.vue'
import TheBlog from '@/components/MainPage/TheBlog.vue'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    TheWelcomeScreen,
    TheCards,
    TheBanner,
    TheBlog,
  },

  async asyncData(ctx) {
    const arr = await ctx.store.dispatch('get_svrs')

    const result = arr.splice(0, 6)

    return { result }
  },
})
</script>

<style lang="scss" scoped>
.main-page {
  &__banner {
    margin: 54px 0;
  }
}
</style>
