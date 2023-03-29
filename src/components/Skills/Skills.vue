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
  margin: var(--s-xs) 0 0;
  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 var(--s-xs);
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
    }
  }
}
</style>
