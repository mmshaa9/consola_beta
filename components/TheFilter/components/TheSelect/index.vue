<template>
  <div class="the-select">
    <div class="the-select__item" @click="show = !show">
      <p class="the-select__helper-text">{{ helperText }}</p>

      <p class="the-select__text">
        {{ show && !select ? '|' : select ? select : modelValue }}
      </p>
    </div>

    <the-drop-menu
      v-if="show"
      class="the-select__drop-menu"
      @select="selected"
    />
  </div>
</template>

<script lang="ts">
import Vue, { ref } from 'vue'

import TheDropMenu from './components/TheDropMenu.vue'

export default Vue.extend({
  name: 'TheLocalSelect',

  components: {
    TheDropMenu,
  },

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    helperText: {
      type: String,
      default: '',
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    const show = ref(false)
    const select = ref('')

    const selected = (data: string) => {
      select.value = data
      show.value = false
      emit('update:modelValue', data)
    }

    return { show, select, selected }
  },
})
</script>

<style lang="scss" scoped>
.the-select {
  width: 100%;
  position: relative;

  &__item {
    width: 100%;
    cursor: pointer;
    padding: 14px 20px;
    border-radius: 8px;
    background-color: $lightGrey;
  }

  &__helper-text {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin: 0;
  }

  &__text {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin: 0;
  }

  &__drop-menu {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 1;
  }
}
</style>
