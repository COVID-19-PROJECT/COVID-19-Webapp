<template>
  <div>
    <navigation class="is-fixed-top" />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
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
