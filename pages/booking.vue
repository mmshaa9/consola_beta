<template>
  <div class="booking-page">
    <div class="my-container">
      <TheDesktop v-if="$store.state.isDesktop" />

      <TheMobile v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BookingPage',

  components: {
    TheMobile: () => import('@/components/BookingPage/Mobile.vue'),
    TheDesktop: () => import('@/components/BookingPage/Desktop.vue'),
  },
})
</script>

<style lang="scss" scoped>
.booking-page {
  width: 100%;
  padding-top: 24px;
  padding-bottom: 48px;

  @include desktop {
    padding-top: 40px;
    padding-bottom: 100px;
  }
}
</style>
