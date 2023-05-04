<template>
  <div class="logo">
    <img :src="logoURL" alt="">
  </div>
</template>

<script setup lang="tsx">
const logoURL = new URL('~/assets/images/logo.svg', import.meta.url).href;
</script>

<style  lang="scss" scoped>
.logo {
  display: flex;
  img {
    height: 2rem;
    width: calc(37rem / 16);
    width: auto;
    @include filter-bays-1;
  }
  i {
    display: block;
    font-style: normal;
    font-size:  var(--fz-h-md);
    font-family: var(--font-bold);
  }
}
.dark {
  .logo {
    img {
      @include filter-bays-0;
    }
  }
}
</style>
