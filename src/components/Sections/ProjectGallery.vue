<template>
  <section :id="props.title.id" class="section">
    <div
      v-appear-transition
      class="section__title-wrapper animation animation_opacity animation_drop start"
    >
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <div class="section__text-content">
      <p
        v-appear-transition
        class="section__paragraph animation animation_opacity animation_slide-left start"
      >
        <span>This page is still under construction</span>
      </p>
    </div>
  </section>
</template>
<script setup lang="tsx">
import { appearAnimation } from '~/helpers/appear-animation';
import { MenuItem } from '~/components/Menu/menu-data';

const props = defineProps<{
  title: MenuItem;
}>();
const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
</script>
<style lang="scss" scoped>
.section {
  margin-top: calc(var(--s-xs) * 2 + var(--fz-h-sm));
  &__text-content {
    order: 2;
    .skills,
    .section__paragraph:nth-child(2) {
      display: none;
    }
  }
  @include md-screen {
    @include md-grid;
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
    }
    &__text-content {
      grid-column-start: 1;
      grid-column-end: 13;
    }
  }
}
</style>
