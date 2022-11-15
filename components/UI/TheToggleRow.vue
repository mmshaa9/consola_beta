<template>
  <div class="the-toggle-row">
    <div class="the-toggle-row__content" @click="click">
      <span class="the-toggle-row__content_title">
        {{ obj.name }}
      </span>

      <img
        v-if="obj.childrens && obj.childrens.length"
        :class="[
          'the-toggle-row__content_vektor',
          { 'the-toggle-row__content_vektor--active': show },
        ]"
        src="@/static/svg/vektor.svg"
        alt=""
      />
    </div>

    <div
      v-if="obj.childrens && obj.childrens.length && show"
      class="the-toggle-row__drop"
    >
      <template v-if="content">
        <the-content
          v-for="(item, i) in obj.childrens"
          :key="i"
          :obj="item"
          :class="[
            item.type === 'program' ? 'the-toggle-row__content_item' : '',
          ]"
        />
      </template>

      <template v-else>
        <p
          v-for="(item, i) in obj.childrens"
          :key="i"
          class="the-toggle-row__drop_text"
          @click="goTo(item)"
        >
          {{ item.name }}
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheContent from '@/components/CardPage/TheContent.vue'

export default Vue.extend({
  name: 'TheToggleRow',

  components: {
    TheContent,
  },

  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  methods: {
    click() {
      if (this.obj.link) {
        this.$router.push(this.obj.link)
      } else {
        this.show = !this.show
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.the-toggle-row {
  width: 100%;
  margin-bottom: 30px;

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &_item {
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_title {
      font-weight: 500;
      font-size: 16px;
      color: $dark;
    }

    &_vektor {
      transform: rotate(0deg);
      transition: 0.1s;
      max-width: 16px;
      max-height: 16px;
      width: 16px;
      height: 16px;

      &--active {
        transform: rotate(180deg);
      }
    }
  }

  &__drop {
    width: 100%;
    padding-top: 16px;

    &_text {
      font-size: 16px;
      color: $grey;
      margin-bottom: 16px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
