<template>
  <div class="the-not-found">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheNotFound',
})
</script>

<style lang="scss" scoped>
.the-not-found {
  width: inherit;
  height: inherit;
  background-color: $grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: $white;
  text-transform: uppercase;
}
</style>
