<template>
  <section class="section section_numbered section_experience" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
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
  title: MenuItem 
}>();

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};

</script>
<style lang="scss" scoped>
.section_experience {
  @include md-screen {
    padding: 0 var(--s-md);
  }
}
</style>