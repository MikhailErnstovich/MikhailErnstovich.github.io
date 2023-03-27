<template>
  <article class="skills">
    <ul class="skills__list">
      <li class="skills__list-item" v-for="item in skills">{{ item }}</li>
    </ul>
  </article>
</template>

<script setup lang="tsx">
import { skills } from './skill-data';

</script>

<style  lang="scss" scoped>
.skills {
  margin: var(--s-sm) 0 0;
  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 var(--s-sm);
    list-style: none;
    &-item {
      position: relative;
      padding-left: var(--s-md);
      height: var(--s-lg);
      line-height: var(--s-lg);
      font-size: var(--fz-sm);
      &::before {
        display: block;
        content: '⚙︎';
        position: absolute;
        left: 0;
        height: inherit;
        line-height: inherit;
        color: var(--bays-0);
      }
    }
  }
}
</style>
