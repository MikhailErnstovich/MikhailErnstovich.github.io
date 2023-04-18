<template>
  <article class="skills">
    <ul class="skills__list">
        <li 
          class="skills__list-item animation animation_opacity animation_slide-left start" 
          v-for="item in skills" 
          :key="item"
          v-appear-transition
        >
          {{ item }}
        </li>
    </ul>
  </article>
</template>

<script setup lang="tsx">
import { skills } from './skill-data';
import { appearAnimation } from '~/helpers/appear-animation';

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
</script>

<style  lang="scss" scoped>
.skills {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;      
    list-style: none;
    &-item {
      display: block;
      width: 40%;
      position: relative;
      padding-left: var(--s-sm);
      height: clamp(2rem, 1.757rem + 1.036vw, 3rem);
      font-family: var(--font-light);
      line-height: clamp(1.25rem, 1.129rem + 0.518vw, 1.75rem);
      font-size: clamp(0.875rem, 0.784rem + 0.388vw, 1.25rem);
      &::before {
        display: block;
        content: '⚙︎';
        position: absolute;
        left: 0;
        height: inherit;
        line-height: inherit;
        color: var(--bays-1);
        font-size: 0.9em;
      }
      &:nth-child(2) {
        transition-delay: .6s;
      }
      &:nth-child(3) {
        transition-delay: .2s;
      }
      &:nth-child(4) {
        transition-delay: .8s;
      }
      &:nth-child(5) {
        transition-delay: .4s;
      }
      &:nth-child(6) {
        transition-delay: 1s;
      }
    }
  }
}
html.dark {
  .skills {
  &__list {
    &-item {
      &::before {
        color: var(--bays-0);
      }
    }
  }
}
}
</style>
