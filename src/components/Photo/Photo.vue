<template>
  <div class="photo">
    <figure class="photo__wrapper">
      <picture v-inserted class="photo__content">
        <source :data-url="imgUrls.lg" media="(min-width: 1256px)" />
        <source :data-url="imgUrls.md" media="(min-width: 768px)" />
        <img class="photo__img" :data-url="imgUrls.sm" alt="Mikhail Makarov" />
      </picture>
    </figure>
  </div>
</template>
<script setup lang="tsx">
import { insertImage } from '~/helpers/lazy-loaders';
const imgUrls = {
  sm: new URL('~/assets/images/me-sm.webp', import.meta.url).href,
  md: new URL('~/assets/images/me-md.webp', import.meta.url).href,
  lg: new URL('~/assets/images/me.webp', import.meta.url).href,
};

const vInserted = {
  mounted: insertImage,
};
</script>
<style lang="scss" scoped>
.photo {
  position: relative;
  width: 100%;
  margin: var(--s-xs) auto var(--s-md);
  padding: var(--s-sm);
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
      border: 2px solid var(--bays-1);
      border-top: none;
      border-left: none;
      transform: translate(var(--s-xs), calc(15px - 100%));
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
html.dark {
  .photo {
    &__wrapper {
      &::after {
        border: 2px solid var(--bays-0);
        border-top: none;
        border-left: none;
      }
    }
  }
}
</style>
