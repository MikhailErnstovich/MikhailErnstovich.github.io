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
    grid-template-columns: repeat(2, 1fr);
    gap: 0 var(--s-xs);
    padding: 0 var(--s-sm);
    list-style: none;
    &-item {
      position: relative;
      padding-left: var(--s-sm);
      height: var(--s-md);
      line-height: var(--s-md);
      font-size: var(--fz-sm);
      &::before {
        display: block;
        content: '⚙︎';
        position: absolute;
        left: 0;
        height: inherit;
        line-height: inherit;
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
    &__list-item {
      font-size: var(--fz-md);
    }
  }
  @include lg-screen {
    &__list-item {
      font-size: var(--fz-lg);
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
