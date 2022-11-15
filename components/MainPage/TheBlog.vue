<template>
  <div class="the-blog">
    <div class="my-container">
      <the-slider
        title="Блог"
        :list="$store.state.blogs"
        blog
        :count-slides="$store.state.isDesktop ? 2 : 1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheSlider from '@/components/UI/TheSlider.vue'

export default Vue.extend({
  name: 'TheBlog',

  components: {
    TheSlider,
  },

  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.the-blog {
  background-color: transparent;
  padding-bottom: 48px;
  overflow: hidden;
}
</style>
