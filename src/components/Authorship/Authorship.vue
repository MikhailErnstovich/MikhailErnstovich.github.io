<template>
  <div class="authorship">
    <span class="authorship__text"> {{ $t('authorship.text') }}</span>
    <a class="link authorship__link" target="_blank" href="https://github.com/MikhailErnstovich/MikhailErnstovich.github.io">
      {{ $t('authorship.link') }}
    </a>
  </div>
</template>
<script setup lang="tsx">

</script>
<style lang="scss" scoped>
.authorship {
  margin: var(--s-sm) 0;
  text-align: center;
  font-size: clamp(var(--fz-xs), 0.692rem + 0.249vw, var(--fz-md));
}
</style>