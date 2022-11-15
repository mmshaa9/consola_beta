<template>
  <div class="the-header">
    <div class="my-container">
      <div class="the-header__mobile">
        <img
          v-if="$route.path !== '/'"
          class="the-header__vektor"
          src="@/static/svg/vektor-v3.svg"
          alt=""
          @click="$router.go(-1)"
        />

        <img
          class="the-header__logo"
          src="@/static/svg/Logo/logo-gold.svg"
          alt=""
          @click="clickLogo"
        />

        <div class="the-header__icons">
          <img
            class="the-header__burger"
            src="@/static/svg/burger.svg"
            alt=""
            @click="drawer = true"
          />
        </div>
      </div>

      <div class="the-header__desktop">
        <img
          class="the-header__burger"
          src="@/static/svg/burger.svg"
          alt=""
          @click="drawer = true"
        />

        <img
          class="the-header__logo"
          src="@/static/svg/Logo/logo-gold.svg"
          alt=""
          @click="clickLogo"
        />
      </div>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="max-content"
    >
      <TheMenu />
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',

  components: {
    TheMenu: () => import('@/components/TheMenu.vue'),
  },

  data() {
    return {
      drawer: false,
    }
  },

  methods: {
    clickLogo() {
      this.drawer = false
      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss" scoped>
.the-header {
  width: 100%;
  background-color: $white;

  @include desktop {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;

    @include desktop {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @include desktop {
      display: flex;
      align-items: center;
    }
  }

  &__vektor {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &__logo {
    width: 126px;
    height: 30px;
    cursor: pointer;

    @include desktop {
      margin-left: 20px;
    }
  }

  &__icons {
    width: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__burger {
    cursor: pointer;
    width: 30px;
    height: 16px;
  }
}
</style>
