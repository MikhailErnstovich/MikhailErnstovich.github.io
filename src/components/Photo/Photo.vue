<template>
  <div class="photo">
    <div class="photo__wrapper">
      <picture class="photo__content">
        <source 
          :srcset="imgUrls.lg"
          media="(min-width: 1000px)"
        />
        <source 
          :srcset="imgUrls.md" 
          media="(min-width: 600px)"
        />
        <img 
          class="photo__img"
          :src="imgUrls.sm"
          alt="Mikhail Makarov"
        />
      </picture>
    </div>
  </div>
</template>
<script setup lang="tsx">
const imgUrls = {
  sm:  new URL('~/assets/images/me-sm.webp', import.meta.url).href,
  md:  new URL('~/assets/images/me-md.webp', import.meta.url).href,
  lg:  new URL('~/assets/images/me.webp', import.meta.url).href
}
</script>
<style lang="scss" scoped>
.photo {
  position: relative;
  width: 100%;
  padding: var(--s-md);
  margin: var(--s-sm) auto var(--s-lg);
  &__wrapper {
    position: relative;
    &:focus .photo__img,
    &:hover .photo__img {
      filter: contrast(1.2) saturate(1.2);
      mix-blend-mode: normal;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    &::before {
      top: 0;
      left: 0;
      background-color: var(--bays-0-03);
    }
    &::after {
      border: 2px solid var(--bays-0);
      border-top: none;
      border-left: none;
      transform: translate(var(--s-sm), calc(15px - 100%));
      transition: all .3s ease-in-out;
      z-index: -1;
      will-change: transform;
    }
    &:hover::after {
      transform: translate(5px, calc(5px - 100%));
    }
  }
  &__img {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
    mix-blend-mode: multiply;
  }
}
</style>