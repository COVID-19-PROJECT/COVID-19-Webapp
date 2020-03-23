<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="localePath('/')">
        <logo class="navbar-logo" />
        <span class="title is-4">{{ $t('general.site-name') }}</span>
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
      <slot />
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
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  .navbar-logo {
    max-height: $size-1;
    max-width: $size-1;
  }
}
</style>
