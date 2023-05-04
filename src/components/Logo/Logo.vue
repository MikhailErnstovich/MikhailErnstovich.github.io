<template>
  <div class="logo">
    <!-- <i>M</i> -->
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
