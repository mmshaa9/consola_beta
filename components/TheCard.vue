<template>
  <div class="the-card">
    <v-img
      v-if="blog"
      :src="require(`@/static/images/${obj.image}.jpg`)"
      :lazy-src="require(`@/static/images/${obj.image}.jpg`)"
      aspect-ratio="1"
      class="the-card__image"
      @click="!blog ? goTo(obj.id) : ''"
    />

    <v-img
      v-else
      :src="image"
      :lazy-src="image"
      aspect-ratio="1"
      class="the-card__image the-card__pointer"
      @click="!blog ? goTo(obj.id) : ''"
    />

    <div class="the-card__content">
      <p
        v-sanitize.strip="obj.name"
        :class="['the-card__title', { 'the-card__pointer': !blog }]"
        @click="!blog ? goTo(obj.id) : ''"
      />

      <p v-sanitize.strip="otherText" class="the-card__other-text" />

      <the-tag v-if="!blog" v2 class="the-card__tag">
        {{ tag }}
      </the-tag>

      <div v-if="!blog" class="the-card__bottom-content">
        <span v-sanitize.strip="`${cost} ₽`" class="the-card__cost" />

        <span
          v-sanitize.strip="'Подробнее'"
          class="the-card__more"
          @click="goTo(obj.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheTag from '@/components/UI/TheTag.vue'

import { datePeriod, prepareCost } from '@/helpers/index.js'

import { ProgramListItem } from '@/helpers/type'

export default Vue.extend({
  name: 'TheCard',

  components: {
    TheTag,
  },

  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    blog: {
      type: Boolean,
      default: false,
    },
    program: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    image(): string {
      let result = ''
      if (this.obj.photo_list && !this.program) {
        this.obj.photo_list.forEach((element: any) => {
          if (element.type === 'main') {
            result = `https://konsola.ru/cms/assets/${element.photo_id.id}`
          }
        })
      } else if (this.program) {
        result = `https://konsola.ru/cms/assets/${this.obj.program_type_id.photo_id.id}`
      }
      return result
    },
    otherText(): string {
      let result = ''
      if (this.blog) {
        result = this.obj.text
      } else if (this.program) {
        result = this.obj.description
      } else {
        result = this.obj.address
      }
      return result
    },
    cost(): string {
      let cost = 0

      if (this.program) {
        cost = this.obj.date_list[0].cost || 0
      } else {
        const programs = this.obj?.program_list

        if (programs.length) {
          programs.sort(
            (a: ProgramListItem, b: ProgramListItem) =>
              a.date_list[0].cost - b.date_list[0].cost
          )
          cost = programs[0].date_list[0].cost || 0
        }
      }
      return prepareCost(cost)
    },
    tag(): string {
      let result = ''
      if (this.program) {
        result = `${datePeriod(
          this.obj.date_list[0].date_start
        )} - ${datePeriod(this.obj.date_list[0].date_finish)}`
      } else {
        result = this.obj.tag || 'Здоровье'
      }
      return result
    },
  },

  methods: {
    goTo(id: string) {
      this.$router.push({
        path: this.program ? '/program' : '/card',
        query: { id },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.the-card {
  background: $white;
  border-radius: 6px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 10px rgba(64, 66, 72, 0.1));

  &__pointer {
    cursor: pointer;
  }

  &__image {
    min-height: 220px;
    max-height: 220px;
    height: 220px;

    @include desktop {
      min-height: 238px;
      max-height: 238px;
      height: 238px;
    }
  }

  &__content {
    padding: 20px;
    padding-top: 10px;

    @include desktop {
      padding-top: 20px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    color: $dark;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
  }

  &__other-text {
    font-family: 'Inter';
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__tag {
    margin-top: 10px;
    margin-bottom: 16px;
  }

  &__bottom-content {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  &__cost {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: $letterSpacing;
    color: $dark;
    line-height: 100%;
  }

  &__more {
    font-size: 16px;
    letter-spacing: $letterSpacing;
    line-height: 100%;
    color: $dark;
    cursor: pointer;
    border-bottom: 1px solid $dark;
  }
}
</style>
