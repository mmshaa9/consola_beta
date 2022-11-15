<template>
  <div class="the-block-children">
    <the-children
      v-for="(item, i) in childrens"
      :key="item.id"
      :index="i"
      :obj="item"
      class="the-block-children__item"
      :v1="v1"
      :v2="v2"
      :is-gender="isGender"
      @del="del"
      @changeChildrens="changeChildrens"
    />

    <div class="the-block-children__controls">
      <img
        class="the-block-children__controls_icon"
        src="@/static/svg/add.svg"
        alt="add"
      />

      <span class="the-block-children__controls_text" @click="addItem">
        Добавить ребенка
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheChildren from './components/TheChildren.vue'

export default Vue.extend({
  name: 'TheBlockChildren',

  components: {
    TheChildren,
  },

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    v1: {
      type: Boolean,
      default: false,
    },
    v2: {
      type: Boolean,
      default: false,
    },
    isGender: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      childrens: [],
    }
  },

  mounted() {
    this.addItem()
  },

  methods: {
    randomId() {
      return Math.floor(Math.random() * 1000)
    },
    // @ts-ignore
    del(id) {
      // @ts-ignore
      this.childrens = this.childrens.filter((item) => item.id !== id)
    },
    addItem() {
      this.childrens.push({
        // @ts-ignore
        name: '',
        // @ts-ignore
        years: [
          // @ts-ignore
          { name: '14', id: 1 },
          // @ts-ignore
          { name: '15', id: 2 },
          // @ts-ignore
          { name: '16', id: 3 },
          // @ts-ignore
          { name: '17', id: 4 },
        ],
        // @ts-ignore
        id: this.randomId(),
      })
    },
    // @ts-ignore
    changeChildrens(data) {
      // @ts-ignore
      this.childrens[data.index].name = data.name
      this.$emit('update:modelValue', this.childrens)
    },
  },
})
</script>

<style lang="scss" scoped>
.the-block-children {
  width: 100%;

  &__item {
    margin-bottom: 20px;
  }

  &__controls {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &_text {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      border-bottom: 1px solid $dark;
      line-height: 100%;
      color: $dark;
    }

    &_icon {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
  }
}
</style>
