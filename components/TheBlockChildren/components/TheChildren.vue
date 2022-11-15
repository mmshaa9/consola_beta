<template>
  <div class="the-children">
    <div class="the-children__title">
      <span class="the-children__title_text">Ребенок {{ index + 1 }}</span>

      <span
        v-if="index + 1 > 1"
        class="the-children__title_del"
        @click="$emit('del', obj.id)"
      >
        Удалить
      </span>
    </div>

    <div class="the-children__selects">
      <the-select
        v-model="select"
        helper-text="Возраст"
        vektor
        :list="obj.years"
        class="the-children__select"
        :v1="v1"
        :v2="v2"
      />

      <the-select
        v-if="isGender"
        v-model="gender"
        helper-text="Пол"
        vektor
        :list="genderList"
        class="the-children__select"
        :v1="v1"
        :v2="v2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheSelect from '@/components/UI/TheSelect.vue'

export default Vue.extend({
  name: 'TheChildren',

  components: {
    TheSelect,
  },

  props: {
    index: {
      type: Number,
      default: 1,
    },
    obj: {
      type: Object,
      default: () => {},
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
      select: '',
      gender: '',
      genderList: [{ name: 'Девочка' }, { name: 'Мальчик' }],
    }
  },

  watch: {
    select(val) {
      this.$emit('changeChildrens', { name: val, index: this.index })
    },
  },

  mounted() {
    this.select = this.obj.years[0].name
    this.gender = this.genderList[0].name
  },
})
</script>

<style lang="scss" scoped>
.the-children {
  width: 100%;

  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    &_text {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_del {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      border-bottom: 1px solid $dark;
      line-height: 100%;
      color: $grey;
      cursor: pointer;
    }
  }

  &__select {
    max-width: 154px;
  }

  &__selects {
    display: flex;
    gap: 20px;
  }
}
</style>
