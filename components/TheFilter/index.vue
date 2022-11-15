<template>
  <div :class="['the-filter', { 'the-filter__fixed': !catalog }]">
    <div :class="[!catalog ? 'my-container' : 'the-filter__container']">
      <div class="the-filter__title">
        <span class="the-filter__title_text"> Куда едем? </span>

        <img
          v-if="!catalog"
          class="the-filter__title_image"
          src="@/static/svg/close.svg"
          alt=""
          @click="changeVisibleFilter(false)"
        />
      </div>

      <div class="the-filter__block">
        <the-local-select v-model="location" :helper-text="'Местоположение'" />

        <div class="the-filter__checkbox">
          <the-checkbox
            v-model="nearbyСities"
            class="the-filter__checkbox_item"
          />

          <p class="the-filter__checkbox_text">
            Показывать ближайшие города к выбранному региону
          </p>
        </div>

        <div class="the-filter__selects">
          <the-select
            v-model="arrival"
            :helper-text="'Прибытие'"
            calendar
            left
            v2
          />

          <the-select
            v-model="checkout"
            :helper-text="'Выезд'"
            calendar
            right
            v2
          />
        </div>
      </div>

      <div class="the-filter__block">
        <the-block-children
          v-model="childrens"
          class="the-filter__the-block-children"
          v2
        />

        <div class="the-filter__checkbox the-filter__no-bb">
          <the-checkbox v-model="together" class="the-filter__checkbox_item" />

          <p class="the-filter__checkbox_text">Дети едут вместе</p>
        </div>
      </div>

      <div class="the-filter__block">
        <div class="the-filter__title">
          <p class="the-filter__title_text">Дополнительно</p>
        </div>

        <p class="the-filter__title_small-text">Тип размещения</p>

        <div class="the-filter__selects">
          <the-select
            v-model="typeCamp"
            :list="list"
            vektor
            :helper-text="'Тип лагеря'"
            class="the-filter__select"
            v2
          />

          <the-select
            v-model="typeRoom"
            :list="list"
            vektor
            :helper-text="'Тип комнаты'"
            class="the-filter__select"
            v2
          />
        </div>

        <p class="the-filter__title_small-text">Элементы инфраструктуры</p>

        <div class="the-filter__tag">
          <div
            v-for="obj in infrastructures"
            :key="obj.id"
            class="the-filter__tag_item"
          >
            <img
              v-if="obj.icon"
              class="the-filter__tag_icon"
              :src="require(`@/static/svg/TheElements/${obj.icon}.svg`)"
              alt=""
            />

            <span class="the-filter__tag_text">{{ obj.name }}</span>
          </div>
        </div>
      </div>

      <div class="the-filter__title">
        <p class="the-filter__title_text">Стоимость</p>
      </div>

      <the-range v-model="cost" class="the-filter__range" />

      <the-select
        v-model="sort"
        vektor
        :list="list"
        :helper-text="'Сортировать по цене'"
        class="the-filter__select"
        v2
      />

      <div class="the-filter__checkbox">
        <the-checkbox v-model="cashback" class="the-filter__checkbox_item" />

        <p class="the-filter__checkbox_text">Кешбэк</p>
      </div>

      <div :class="['the-filter__block', { 'the-filter__no-bb': catalog }]">
        <div class="the-filter__title">
          <p class="the-filter__title_text">Цели</p>
        </div>

        <the-select
          v-model="campDestination"
          :list="list"
          :helper-text="'Направление лагеря'"
          class="the-filter__select"
          v2
        />

        <div class="the-filter__tag">
          <div v-for="obj in list" :key="obj.id" class="the-filter__tag_item">
            <span class="the-filter__tag_text">{{ obj.name }}</span>

            <img
              class="the-filter__tag_close"
              :src="require(`@/static/svg/close.svg`)"
              alt=""
            />
          </div>
        </div>
      </div>

      <div v-if="!catalog" class="the-filter__btn the-filter__btn_sticky">
        <the-button type="purple" @click="changeVisibleFilter(false)">
          Применить
        </the-button>
      </div>

      <the-button v-if="!catalog" class="the-filter__btn" type="grey">
        Очистить
      </the-button>

      <the-button
        v-if="!catalog"
        class="the-filter__btn"
        type="grey"
        @click="changeVisibleFilter(false)"
      >
        Закрыть
      </the-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

import TheLocalSelect from './components/TheSelect/index.vue'
import TheBlockChildren from '@/components/TheBlockChildren/index.vue'
import TheCheckbox from '@/components/UI/TheCheckbox.vue'
import TheSelect from '@/components/UI/TheSelect.vue'
import TheButton from '@/components/UI/TheButton.vue'
import TheRange from '@/components/UI/TheRange.vue'

export default Vue.extend({
  name: 'TheFilter',

  components: {
    TheLocalSelect,
    TheCheckbox,
    TheSelect,
    TheBlockChildren,
    TheButton,
    TheRange,
  },

  props: {
    catalog: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      location: 'Выберите регион',
      nearbyСities: false,
      arrival: '01.01.2022',
      checkout: '01.12.2022',
      childrens: [],
      together: false,
      cost: [2000, 200000],
      sort: 'По возрастанию',
      cashback: false,
      typeCamp: 'Любой',
      typeRoom: '2-6 чел',
      campDestination: 'Выберите направления',
      infrastructures: [
        { name: 'Балкон', icon: 'balcony', id: 1 },
        { name: 'Детская комната', icon: 'children-room', id: 2 },
        {
          name: 'Зеленая зона для прогулок',
          icon: 'green-area-for-walking',
          id: 3,
        },
        { name: 'Спортивная площадка', icon: 'sport-field', id: 4 },
        { name: 'Видеонаблюдение 24/7', icon: 'video-surveillance', id: 5 },
        { name: 'Бассейн', icon: 'pool', id: 6 },
        { name: '+ показать еще 30', id: 7 },
      ],
      list: [
        { name: 'test1', id: 1 },
        { name: 'test2', id: 2 },
        { name: 'test3', id: 3 },
      ],
    }
  },

  methods: {
    ...mapMutations({ changeVisibleFilter: 'changeVisibleFilter' }),
  },
})
</script>

<style lang="scss" scoped>
.the-filter {
  background-color: $white;

  @include desktop {
    border-radius: 20px;
    height: max-content;
  }

  &__fixed {
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 1;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  &__container {
    padding: 24px;
    width: 100%;
  }

  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &_text {
      font-size: 18px;
      display: flex;
      margin: 0 auto;
      font-family: 'Inter';
      letter-spacing: $letterSpacing;
      color: $dark;
    }

    &_small-text {
      width: 100%;
      font-size: 16px;
      font-family: 'Inter';
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 20px;
    }

    &_image {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  &__tag {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &_item {
      width: max-content;
      padding: 6px 10px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $purple;
      cursor: pointer;
      color: $grey;
      background-color: $lightGrey;
    }

    &_text {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      color: $grey;
    }

    &_icon {
      margin-right: 4px;
      width: 18px;
      height: 18px;
    }

    &_close {
      width: 10px;
      height: 10px;
      margin-left: 4px;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    margin: 16px 0 22px 0;

    &_item {
      margin-right: 6px;
    }

    &_text {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 0;
    }
  }

  &__selects {
    width: 100%;
    display: flex;
    gap: 16px;
  }

  &__select {
    margin-bottom: 20px;
  }

  &__block {
    margin-bottom: 40px;
  }

  &__no-bb {
    margin-bottom: 0 !important;
  }

  &__btn {
    margin-bottom: 16px;

    &_sticky {
      position: sticky;
      bottom: 0;
      margin-bottom: 16px;
      background-color: $white;
      z-index: 5;
      border-radius: 10px;
    }
  }
}
</style>
