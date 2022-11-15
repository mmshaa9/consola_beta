<template>
  <div class="the-about-camp">
    <div class="the-about-camp__map">
      <yandex-map
        v-if="showMap"
        class="the-about-camp__map_item"
        :coords="coords"
        :zoom="10"
        @map-was-initialized="init"
      >
        <ymap-marker
          :coords="coords"
          marker-id="123"
          hint-content="some hint"
        />
      </yandex-map>

      <v-img
        v-if="image"
        :src="image"
        :lazy-src="image"
        class="the-about-camp__map_image"
      />

      <the-not-found v-else class="the-about-camp__map_image">
        нет изображения
      </the-not-found>
    </div>

    <p v-if="slogan" v-sanitize="slogan" class="the-about-camp__title" />

    <div class="the-about-camp__block">
      <div class="the-about-camp__block_inner">
        <div class="the-about-camp__block_sub">
          <div class="the-about-camp__block_data the-about-camp__block_mb">
            <p
              v-sanitize="'Доставка детей до лагеря:'"
              class="the-about-camp__block_title"
            />

            <p v-sanitize="logistics" class="the-about-camp__block_text" />
          </div>

          <div class="the-about-camp__block_data the-about-camp__block_mb">
            <p
              v-sanitize="'Лицензии на осуществление медицинской деятельности:'"
              class="the-about-camp__block_title"
            />

            <p
              v-sanitize="'№ ЛО-77-01-011020 от 06.10.2015 г.'"
              class="the-about-camp__block_text"
            />
          </div>

          <div class="the-about-camp__block_data the-about-camp__block_mb">
            <p
              v-sanitize="
                'Лицензия на осуществление образовательной деятельности:'
              "
              class="the-about-camp__block_title"
            />

            <p
              v-sanitize="'№ 038285 от 16.03.2017 г.'"
              class="the-about-camp__block_text"
            />
          </div>

          <div class="the-about-camp__block_data">
            <p
              v-sanitize="'Санитарно-эпидемиологического заключение:'"
              class="the-about-camp__block_title"
            />

            <p
              v-sanitize="'№ 77.32.18.000.М.002205.05.20 от 08.05.2020 г.'"
              class="the-about-camp__block_text"
            />
          </div>
        </div>

        <div class="the-about-camp__block_sub">
          <div class="the-about-camp__block_data the-about-camp__block_mb">
            <p
              v-sanitize="'Вместимость лагеря (детей в смену):'"
              class="the-about-camp__block_title"
            />

            <p v-sanitize="'250 мест'" class="the-about-camp__block_text" />
          </div>

          <div class="the-about-camp__block_data the-about-camp__block_mb">
            <p
              v-sanitize="'Год открытия лагеря:'"
              class="the-about-camp__block_title"
            />

            <p v-sanitize="openDate" class="the-about-camp__block_text" />
          </div>

          <div class="the-about-camp__block_data">
            <p
              v-sanitize="'Tуроператор:'"
              class="the-about-camp__block_title"
            />

            <p v-sanitize="operator" class="the-about-camp__block_text" />
          </div>
        </div>
      </div>
    </div>

    <div class="the-about-camp__block">
      <div
        v-for="(document, i) in documents"
        :key="i"
        class="the-about-camp__document"
      >
        <p v-sanitize="document.title" class="the-about-camp__document_title" />

        <div class="the-about-camp__document_group">
          <a
            class="the-about-camp__document_link the-about-camp__document_link_dark"
            :href="document.path"
          >
            Смотреть полностью
          </a>

          <a
            class="the-about-camp__document_link the-about-camp__document_link_purple"
            :href="document.path"
          >
            <v-img
              :src="require('@/static/svg/vektor-v6.svg')"
              :lazy-src="require('@/static/svg/vektor-v6.svg')"
              class="the-about-camp__document_link_icon"
            />
            Скачать PDF
          </a>
        </div>
      </div>
    </div>

    <div class="the-about-camp__block">
      <p v-sanitize="'Программы лагеря'" class="the-about-camp__title" />

      <p
        v-sanitize="'В программе каждой смены:'"
        class="the-about-camp__programs_text"
      />

      <div class="the-about-camp__programs">
        <span
          v-for="(program, i) in programs"
          :key="i"
          v-sanitize="program"
          class="the-about-camp__programs_item"
        />
      </div>
    </div>

    <div class="the-about-camp__block">
      <p v-sanitize="'Распорядок дня'" class="the-about-camp__title" />

      <p v-sanitize.strip="dailyRoutine" class="the-about-camp__text" />
    </div>

    <div class="the-about-camp__block">
      <p v-sanitize="'Описание смен'" class="the-about-camp__title" />

      <p v-sanitize="description" class="the-about-camp__text" />
    </div>

    <div class="the-about-camp__block">
      <div class="the-about-camp__images">
        <v-img
          v-if="data.photo_list[3]"
          :src="`${url}${data.photo_list[3].photo_id.id}`"
          :lazy-src="`${url}${data.photo_list[3].photo_id.id}`"
          class="the-about-camp__images_item"
        />

        <the-not-found v-else class="the-about-camp__images_item">
          нет изображения
        </the-not-found>

        <div class="the-about-camp__images_group">
          <v-img
            v-if="data.photo_list[4]"
            :src="`${url}${data.photo_list[4].photo_id.id}`"
            :lazy-src="`${url}${data.photo_list[4].photo_id.id}`"
            class="the-about-camp__images_group_item"
          />

          <the-not-found v-else class="the-about-camp__images_group_item">
            нет изображения
          </the-not-found>

          <v-img
            v-if="data.photo_list[5]"
            :src="`${url}${data.photo_list[5].photo_id.id}`"
            :lazy-src="`${url}${data.photo_list[5].photo_id.id}`"
            class="the-about-camp__images_group_item"
          />

          <the-not-found v-else class="the-about-camp__images_group_item">
            нет изображения
          </the-not-found>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { Camp } from '@/helpers/interface'

import { PhotoListItem } from '@/helpers/type'

import { dateConvert } from '@/helpers/index.js'

export default Vue.extend({
  name: 'CardPageTheAboutCamp',

  components: {
    TheNotFound: () => import('@/components/TheNotFound.vue'),
  },

  props: {
    data: {
      type: Object as PropType<Camp>,
      required: true,
    },
  },

  data() {
    return {
      showMap: false,
      coords: [],
      url: 'https://konsola.ru/cms/assets/',
      documents: [
        {
          title:
            'Перечень документов, необходимых для отправки ребенка в лагерь:',
          path: '',
        },
        {
          title: 'Подготовка ребенка в лагерь. «Что взять с собой»:',
          path: '',
        },
      ],
      programs: [
        'Творчество',
        'Туризм',
        'Спорт',
        'Развлечения',
        'Оздоровление',
      ],
    }
  },

  computed: {
    image() {
      let result = ''
      const path = 'https://konsola.ru/cms/assets/'

      // @ts-ignore
      if (this.data && this.data.photo_list.length) {
        // @ts-ignore
        this.data.photo_list.forEach((el: PhotoListItem) => {
          if (
            el.type !== 'main' &&
            el.type !== 'outdoor' &&
            el.type !== 'beach' &&
            !result
          ) {
            result = `${path}${el.photo_id.id}`
          }
        })
      }
      return result
    },
    slogan() {
      // @ts-ignore
      return this.data.slogan || ''
    },
    description() {
      // @ts-ignore
      return this.data.description || ''
    },
    dailyRoutine() {
      // @ts-ignore
      return this.data.daily_routine || ''
    },
    logistics() {
      // @ts-ignore
      return this.data.logistics || ''
    },
    operator() {
      // @ts-ignore
      return this.data.tour_operator || ''
    },
    openDate() {
      // @ts-ignore
      return dateConvert(this.data.open_date) || ''
    },
  },

  async mounted() {
    // @ts-ignore
    this.coords = await this.$store.dispatch('getCoords', this.data.address)
    // @ts-ignore
    this.showMap = true
  },

  methods: {
    imageRandom() {
      let result = ''
      const path = 'https://konsola.ru/cms/assets/'

      // @ts-ignore
      if (this.data && this.data.photo_list.length) {
        // @ts-ignore
        this.data.photo_list.forEach((el: PhotoListItem) => {
          if (
            el.type !== 'main' &&
            el.type !== 'outdoor' &&
            el.type !== 'beach' &&
            !result
          ) {
            result = path + el.photo_id.id
          }
        })
      }
      return result
    },
    init() {
      // console.log(data)
    },
  },
})
</script>

<style lang="scss" scoped>
.the-about-camp {
  &__map {
    height: 400px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 30px;

    &_item {
      height: 400px;
      min-width: calc(50% - 8px);
      border-radius: inherit;
      overflow: hidden;
    }

    &_image {
      width: calc(50% - 8px);
      height: 400px;
      border-radius: inherit;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: $letterSpacing;
    color: $dark;
    margin-bottom: 16px;
    cursor: default;
  }

  &__text {
    font-family: 'Inter';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: $letterSpacing;
    color: $grey;
    margin-bottom: 0;
    cursor: default;
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    &_inner {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    &_sub {
      width: 100%;
    }

    &_data {
      letter-spacing: $letterSpacing;
    }

    &_title {
      letter-spacing: inherit;
      color: $dark;
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 0;
      cursor: default;
    }

    &_text {
      letter-spacing: inherit;
      color: $grey;
      font-size: 13px;
      margin-bottom: 0;
      cursor: default;
    }

    &_mb {
      margin-bottom: 16px;
    }
  }

  &__images {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    &_item {
      height: 500px;
      width: 700px;
      border-radius: 6px;
    }

    &_group {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &_item {
        width: 370px;
        height: 240px;
        border-radius: 6px;
      }
    }
  }

  &__programs {
    font-family: 'Inter';
    display: flex;
    gap: 20px;
    letter-spacing: $letterSpacing;

    &_text {
      font-family: inherit;
      margin-bottom: 10px;
      color: $grey;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: inherit;
      cursor: default;
    }

    &_item {
      font-family: inherit;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: inherit;
      color: $purple;
      cursor: default;
    }
  }

  &__document {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }

    &_title {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: $letterSpacing;
      color: $dark;
      margin-bottom: 8px;
      cursor: default;
    }

    &_group {
      display: flex;
      gap: 20px;
    }

    &_link {
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: $letterSpacing;
      text-decoration-line: underline;

      &_dark {
        color: $dark;
      }

      &_purple {
        color: $purple;
      }

      &_icon {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
