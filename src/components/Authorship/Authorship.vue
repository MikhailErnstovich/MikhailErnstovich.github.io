<template>
  <div class="authorship">
    Design & Built by Mikhail Makarov.
    <a class="link authorship__link" target="_blank" href="https://github.com/MikhailErnstovich/MikhailErnstovich.github.io">
      Check out the source code.
    </a>
  </div>
</template>
<script setup lang="tsx">

</script>
<style lang="scss" scoped>
.authorship {
  margin: var(--s-sm) 0;
  text-align: center;
  font-size: var(--fz-xs);
  @include md-screen {
    font-size: var(--fz-sm);
  }
}
</style>