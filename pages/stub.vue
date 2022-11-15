<template>
  <div class="the-stub">
    <div class="the-stub__container">
      <div class="the-stub__content">
        <img
          class="the-stub__logo"
          src="@/static/svg/Logo/logo-gold.svg"
          alt=""
        />

        <p class="the-stub__title">Здравствуйте!</p>

        <div class="the-stub__block">
          <p class="the-stub__block_title-first">
            Вас приветствует
            <span class="the-stub__span">Сonsola</span>
            — новый сервис поиска и бронирования детского отдыха в России
          </p>

          <div class="the-stub__wrap-image">
            <img
              src="@/static/svg/StubPage/child.svg"
              class="the-stub__image"
              alt=""
            />
          </div>

          <p class="the-stub__block_text w686">
            Мы знаем о детском отдыхе всё! Мы хорошо понимаем жизнь современных
            лагерей детского отдыха и оздоровления – их потребности, возможности
            и цели
          </p>

          <p class="the-stub__block_text w512">
            Мы знаем, что нужно детям и родителям для качественного и
            безопасного отдыха
          </p>

          <p class="the-stub__block_text w660 mb0">
            Мы активно работаем с государственными и общественными организациями
            с целью привлечения их внимания к детскому отдыху как к структуре,
            консолидирующей в себе все аспекты жизни, образования, воспитания,
            социализации, здоровья юного гражданина России
          </p>
        </div>

        <div class="the-stub__block">
          <p class="the-stub__block_title-second">
            Скоро на нашем портале будет представлен широкий выбор детских
            лагерей для отдыха и оздоровления разного формата и тематики
          </p>

          <p class="the-stub__block_text w660">
            Вас ждет инновационный, высокотехнологичный, комфортный и безопасный
            сервис поиска и бронирования детского отдыха
          </p>

          <p class="the-stub__block_text w694">
            <span class="the-stub__span">Consola</span> — это проект
            национального масштаба. Мы открыты для сотрудничества со всеми
            участниками рынка детского отдыха в России
          </p>

          <p class="the-stub__block_text wMax">
            Давайте вместе сделаем отдых наших детей незабываемым!
          </p>

          <p class="the-stub__block_text wMax mb0 fw500">
            Присоединяйтесь к сотрудничеству!
          </p>
        </div>

        <p class="the-stub__subscribe">
          Подпишитесь на нашу рассылку, чтобы первым узнать о запуске сайта и
          получать актуальную информацию.
        </p>

        <TheButton
          class="the-stub__button"
          type="orange"
          @click="subscribe = true"
        >
          Подписаться
        </TheButton>
      </div>
    </div>

    <the-subscribe :show="subscribe" @close="subscribe = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TheButton from '@/components/UI/TheButton.vue'

export default Vue.extend({
  name: 'StubPage',

  components: {
    TheButton,
    TheSubscribe: () => import('@/components/TheSubscribe.vue'),
  },

  layout: 'empty',

  data() {
    return {
      subscribe: false,
    }
  },

  head: {
    title: 'Найти детский лагерь в 2022 / 2023 году | Консола',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Консола помогает выбрать детский отдых в лагере весной, летом, осенью и зимой!
        Прочитать условия, посмотреть фотографии, поделиться отзывами и сделать новый заказ, получив все полагающиеся кэшбеки - это Консола!`,
      },
    ],
  },
})
</script>

<style lang="scss" scoped>
.the-stub {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 40px 0;
  z-index: 1;

  &__container {
    @include stylesForContainer;

    z-index: 2;
  }

  &__logo {
    width: 126px;
    height: 30px;
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 324px;
    margin-left: auto;
    margin-right: auto;

    @include desktop {
      width: 100%;
    }
  }

  &__block {
    margin-bottom: 20px;

    @include desktop {
      margin-bottom: 40px;
    }

    &_title-first {
      letter-spacing: $letterSpacing;
      color: $dark;
      font-size: 18px;
      margin-bottom: 10px;

      @include desktop {
        font-size: 28px;
        width: 656px;
      }
    }

    &_title-second {
      font-size: 16px;
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 10px;
      font-weight: 500;

      @include desktop {
        font-size: 22px;
        width: 560px;
      }
    }

    &_text {
      font-size: 15px;
      letter-spacing: $letterSpacing;
      color: $grey;
      margin-bottom: 10px;

      @include desktop {
        font-size: 18px;
      }
    }
  }

  &__span {
    color: $dark;
    font-weight: 500;
  }

  &__title {
    font-size: 22px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 10px;
    font-weight: 500;

    @include desktop {
      font-size: 40px;
      width: max-content;
    }
  }

  &__button {
    max-width: 164px;
  }

  &__wrap-image {
    width: 324px;
    height: 204px;
    z-index: -1;

    @include desktop {
      position: absolute;
      right: -240px;
      top: 72px;
      height: 576px;
      width: 936px;
    }
  }

  &__image {
    width: inherit;
    height: inherit;
  }

  &__subscribe {
    font-size: 16px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 20px;
    font-weight: 500;

    @include desktop {
      font-size: 22px;
      width: 584px;
    }
  }
}

.w686 {
  @include desktop {
    width: 686px;
  }
}

.w512 {
  @include desktop {
    width: 512px;
  }
}

.w660 {
  @include desktop {
    width: 660px;
  }
}

.w694 {
  @include desktop {
    width: 694px;
  }
}

.wMax {
  @include desktop {
    width: max-content;
  }
}

.mb0 {
  @include desktop {
    margin-bottom: 0;
  }
}

.fw500 {
  font-weight: 500;
}
</style>
