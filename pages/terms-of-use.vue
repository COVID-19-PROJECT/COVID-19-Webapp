<template>
  <div class="container">
    <h1 class="title is-1">
      {{ $t('terms-of-use.title') }}
    </h1>

    <h2 class="title is-2">
      {{ $t('terms-of-use.disclamer-title') }}
    </h2>
    <div v-md="$t('terms-of-use.disclamer-content')" />

    <h2 class="title is-2">
      {{ $t('terms-of-use.consent-title') }}
    </h2>
    <div v-md="$t('terms-of-use.consent-content')" />

    <h2 class="title is-2">
      {{ $t('terms-of-use.updates-title') }}
    </h2>
    <div v-md="$t('terms-of-use.updates-content')" />
  </div>
</template>
