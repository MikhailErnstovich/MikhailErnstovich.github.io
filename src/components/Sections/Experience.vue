<template>
  <section :id="props.title.id" class="section section_numbered">
    <div
      v-appear-transition
      class="section__title-wrapper animation animation_opacity animation_drop start"
    >
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <Timeline />
  </section>
</template>
<script setup lang="tsx">
import Timeline from '~/components/Timeline/Timeline.vue';
import { MenuItem } from '~/components/Menu/menu-data';
import { appearAnimation } from '~/helpers/appear-animation';

const props = defineProps<{
  title: MenuItem;
}>();

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
</script>
<style lang="scss" scoped>
.section {
  @include md-screen {
    @include md-grid;
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
    }
    .timeline {
      grid-column-start: 1;
      grid-column-end: 13;
    }
  }
}
</style>
