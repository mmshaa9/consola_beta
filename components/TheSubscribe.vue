<template>
  <div
    :class="[
      'the-subscribe',
      { 'the-subscribe__visibility the-subscribe__opacity': show },
    ]"
  >
    <div
      :class="[
        'the-subscribe__overlay',
        { 'the-subscribe__visibility the-subscribe__opacity_v2': show },
      ]"
      @click="$emit('close')"
    />

    <form
      :class="[
        'the-subscribe__content',
        { 'the-subscribe__visibility the-subscribe__opacity': show },
      ]"
      @submit.prevent="subscribe"
    >
      <p class="the-subscribe__title">
        <span class="the-subscribe__title_text"> Подписаться на рассылку </span>

        <v-img
          :src="require(`@/static/svg/close.svg`)"
          :lazy-src="require(`@/static/svg/close.svg`)"
          class="the-subscribe__title_image"
          @click="$emit('close')"
        />
      </p>

      <the-input
        v-model="firstName"
        class="the-subscribe__input"
        helper-text="Ваше Имя"
        placeholder="Введите"
        v2
      />

      <the-input
        v-model="lastName"
        class="the-subscribe__input"
        helper-text="Ваша Фамилия"
        placeholder="Введите"
        v2
      />

      <the-input
        v-model="email"
        class="the-subscribe__input"
        helper-text="Email"
        placeholder="Введите"
        v2
      />

      <the-input
        v-model="phone"
        class="the-subscribe__input"
        helper-text="Контактный номер"
        v2
        placeholder="+7"
        :mask="$store.state.mask.phone"
      />

      <TheButton type="purple" class="the-subscribe__button" submit>
        Подписаться
      </TheButton>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { clearPhone } from '@/helpers/index.js'

import TheButton from '@/components/UI/TheButton.vue'
import TheInput from '@/components/UI/TheInput.vue'

export default Vue.extend({
  name: 'TheSubscribe',

  components: {
    TheButton,
    TheInput,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  },

  methods: {
    async subscribe() {
      if (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.phone.length === 18
      ) {
        try {
          await this.$store.dispatch('createSubscriber', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: clearPhone(this.phone),
          })
          this.$emit('close')
        } catch (err) {}
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.the-subscribe {
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  visibility: hidden;

  &__overlay {
    width: inherit;
    height: inherit;
    position: absolute;
    top: inherit;
    left: inherit;
    background-color: rgb(33, 33, 33);
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s;
  }

  &__content {
    @include stylesForModals;
    transition: 0.8s;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
    pointer-events: auto;
  }

  &__title {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

    &_image {
      height: 14px;
      width: 14px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    &_text {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
    }
  }

  &__input {
    margin-bottom: 20px;
  }

  &__visibility {
    visibility: visible;
  }

  &__opacity {
    opacity: 1;

    &_v2 {
      opacity: 0.46;
    }
  }
}
</style>
