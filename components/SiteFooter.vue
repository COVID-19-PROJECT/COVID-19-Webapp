<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <nuxt-link :to="localePath('/terms-of-use')">
        {{ $t('navigation.terms-of-use') }}
      </nuxt-link>
    </div>
  </footer>
</template>
