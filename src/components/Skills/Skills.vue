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
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: clamp(var(--s-sm), -2.805rem + 18.367vw, var(--s-xxl));
    width: max-content;
    padding-right: var(--s-xs);
    &-item {
      height: clamp(2rem, 1.757rem + 1.036vw, 3rem);
      font-family: var(--font-light);
      list-style-type: '⚙︎';
      text-indent: var(--s-xss);
      margin-left: 1em;
      &::marker {
        color: var(--bays-1);
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
  @include md-screen {
    container-type: inline-size;
    &__list {
      grid-column-gap: 20cqw;
      padding-right: 0;
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
