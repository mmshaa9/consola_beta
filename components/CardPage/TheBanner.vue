<template>
  <div class="the-banner">
    <div class="the-banner__image" />

    <div class="the-banner__overlay" />

    <div class="the-banner__overlay-second" />

    <div class="the-banner__content">
      <p class="the-banner__content_title">Выбрать подходящую смену</p>

      <p class="the-banner__content_text">
        Просмотрите доступные смены для бронирования
      </p>

      <button class="the-banner__content_button">
        Выбрать подходящие даты
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProgramPageTheBanner',
})
</script>

<style lang="scss" scoped>
.the-banner {
  height: max-content;
  width: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0px 0px 10px rgba(64, 66, 72, 0.1);

  @include desktop {
    height: 450px;
    box-shadow: none;
  }

  &__image {
    @include desktop {
      height: inherit;
      width: inherit;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('@/static/images/ProgramPage/banner.jpg');
      background-size: 100% 100%;
      background-position: center center;
      z-index: 1;
    }
  }

  &__overlay {
    @include desktop {
      height: inherit;
      width: inherit;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        90.08deg,
        rgba(0, 0, 0, 0.3) 0.08%,
        rgba(0, 0, 0, 0) 71.95%
      );
      z-index: 2;
    }
  }

  &__overlay-second {
    @include desktop {
      height: inherit;
      width: inherit;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        270deg,
        rgba(218, 34, 255, 0.4) -6.57%,
        rgba(193, 40, 249, 0.42) 37.03%,
        rgba(167, 47, 242, 0.7) 67.23%,
        #9733ee 108.33%
      );
      opacity: 0.9;
      z-index: 3;
    }
  }

  &__content {
    padding: 20px;

    @include desktop {
      padding: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      z-index: 4;
    }

    &_title {
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 10px;

      @include desktop {
        font-size: 22px;
        line-height: 25px;
        color: $white;
        margin-bottom: 16px;
      }
    }

    &_text {
      font-family: 'Inter';
      font-size: 15px;
      line-height: 22px;
      color: $grey;
      letter-spacing: $letterSpacing;
      margin-bottom: 16px;

      @include desktop {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: $letterSpacing;
        color: $white;
        margin-bottom: 32px;
      }
    }

    &_button {
      width: 100%;
      height: 46px;
      border-radius: 10px;
      border: none;
      background-color: $purple;
      color: $white;

      @include desktop {
        width: 250px;
        height: 60px;
        background-color: $white;
        color: $purple;
      }
    }
  }
}
</style>
