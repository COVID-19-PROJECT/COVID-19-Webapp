<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="localePath('/')">
          <logo class="navbar-logo" />
        </nuxt-link>
        <a
          role="button"
          class="navbar-burger"
          :class="{'is-active': isActive}"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{'is-active': isActive}">
        <nuxt-link :to="localePath('/participate')" class="navbar-item">
          {{ $t('navigation.participate') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/terms-of-use')" class="navbar-item">
          {{ $t('navigation.terms-of-use') }}
        </nuxt-link>
      </div>

      <div class="navbar-end is-hidden-mobile is-hidden-tablet-only">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link :to="localePath('/participate')" class="button is-primary">
              {{ $t('navigation.participate') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    },
  },
  watch: {
    '$route' () {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  .navbar-logo {
    height: $size-1;
  }
}
</style>
