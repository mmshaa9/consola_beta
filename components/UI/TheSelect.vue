<template>
  <div class="the-select">
    <div
      :class="[
        'the-select__item',
        { 'the-select__item_no-bb': show },
        { 'the-select__item_white': v1 },
        { 'the-select__item_light-grey': v2 },
      ]"
      @click="show = !show"
    >
      <p class="the-select__helper-text">{{ helperText }}</p>

      <p class="the-select__text">
        {{ show && !select ? '|' : select ? select : modelValue }}
      </p>

      <img
        v-if="calendar"
        class="the-select__icon the-select__icon_calendar"
        src="@/static/svg/calendar.svg"
        alt=""
      />

      <img
        v-if="vektor"
        class="the-select__icon the-select__icon_vektor"
        src="@/static/svg/vektor.svg"
        alt=""
      />
    </div>

    <div
      v-if="!calendar && show"
      :class="[
        'the-select__drop-menu',
        { 'the-select__drop-menu_white': v1 },
        { 'the-select__drop-menu_light-grey': v2 },
      ]"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="the-select__drop-menu_item"
        @click="selected(item.name)"
      >
        <p class="the-select__drop-menu_text">
          {{ item.name }}
        </p>
      </div>
    </div>

    <v-date-picker
      v-if="calendar && show"
      v-model="select"
      no-title
      scrollable
      locale="ru-RU"
      first-day-of-week="1"
      :weekday-format="weekDay"
      :header-date-format="headerDate"
      :class="[
        'the-select__datepicker',
        { 'the-select__datepicker_left': left },
        { 'the-select__datepicker_right': right },
      ]"
      @change="selected"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheSelect',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    helperText: {
      type: String,
      default: '',
    },
    calendar: {
      type: Boolean,
      default: false,
    },
    vektor: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    v1: {
      type: Boolean,
      default: false,
    },
    v2: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      show: false,
      select: '',
    }
  },

  methods: {
    selected(data: string) {
      this.select = data
      this.$emit('update:modelValue', this.select)
      this.show = false
    },
    weekDay(date: string) {
      const dayList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      const day = new Date(date).getDay()
      return dayList[day]
    },
    headerDate(data: string) {
      const monthList = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ]
      const month = monthList[+data.split('-')[1] - 1]
      const year = data.split('-')[0]
      return `${month} ${year}`
    },
  },
})
</script>

<style lang="scss">
.v-btn--active {
  color: $dark !important;
}
</style>

<style lang="scss" scoped>
.the-select {
  width: 100%;
  position: relative;

  &__datepicker {
    position: absolute;
    top: 67px;
    z-index: 1;

    &_right {
      left: -171px;

      @include desktop {
        left: -154px;
      }
    }

    &_left {
      left: 0;
    }
  }

  &__item {
    width: 100%;
    cursor: pointer;
    padding: 14px 20px;
    border-radius: 8px;
    position: relative;

    &_no-bb {
      border-radius: 8px 8px 0 0;
    }

    &_white {
      background-color: $white;
    }

    &_light-grey {
      background-color: $lightGrey;
    }
  }

  &__text {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin: 0;
  }

  &__helper-text {
    font-size: 14px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin: 0;
  }

  &__icon {
    position: absolute;
    bottom: 16px;

    &_calendar {
      right: 10px;
      width: 18px;
      height: 18px;
    }

    &_vektor {
      right: 20px;
      width: 10px;
      height: 10px;
    }
  }

  &__drop-menu {
    position: absolute;
    width: 100%;
    top: -46x;
    left: 0;
    padding: 0 6px;
    background-color: $lightGrey;
    z-index: 1;
    border-radius: 0 0 8px 8px;
    z-index: 11;

    &_white {
      background-color: $white;
    }

    &_light-grey {
      background-color: $lightGrey;
    }

    &_item {
      width: 100%;
      padding: 12px 14px;
      border-top: 1px solid $silver;
      cursor: pointer;
    }

    &_text {
      width: 100%;
      font-family: 'Inter';
      font-size: 14px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 0;
    }
  }
}
</style>
