<template>
  <div>
    <navigation class="is-fixed-top" />
    <nuxt />
    <siteFooter />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    Navigation,
    SiteFooter,
  },
  head () {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top-desktop',
      },
    }
  },
}
</script>
