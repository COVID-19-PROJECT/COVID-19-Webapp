<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ $t('general.site-name') }}
      </h1>
      <h2 v-md="$t('general.site-description')" class="subtitle" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>
