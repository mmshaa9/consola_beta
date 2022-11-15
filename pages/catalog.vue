<template>
  <div class="catalog-page">
    <div class="my-container">
      <the-content-for-mobile
        v-if="$store.state.isMobile"
        class="catalog-page__the-content-for-mobile"
        :list="result"
      />

      <the-content-for-desktop
        v-if="$store.state.isDesktop"
        class="catalog-page__the-content-for-desktop"
        :list="result"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogPage',

  components: {
    TheContentForMobile: () =>
      import('@/components/CatalogPage/TheContentForMobile.vue'),
    TheContentForDesktop: () =>
      import('@/components/CatalogPage/TheContentForDesktop.vue'),
  },

  async asyncData(ctx) {
    const result = await ctx.store.dispatch('get_svrs')

    return { result }
  },
})
</script>

<style lang="scss" scoped>
.catalog-page {
  width: 100%;
  padding-bottom: 48px;
}
</style>
