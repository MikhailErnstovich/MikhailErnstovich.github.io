<template>
  <section class="section section_numbered section" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph section__paragraph_center animation animation_opacity animation_rise start" v-appear-transition>
      I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible.
    </p>
    <a
      class="mail-link animation animation_opacity animation_drop start" v-appear-transition
      target="_blank"
      :href="contacts.email.link"
    >
      Send message
    </a>
    <!-- <Map /> -->
  </section>
</template>
<script setup lang="tsx">
// import Map from '~/components/Map/Map.vue';
import { contacts } from '~/components/SocialMedia/social-media-data';
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
.section{
  @include md-screen {
    @include md-grid;
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
    }
    &__paragraph {
      grid-column-start: 2;
      grid-column-end: 12;
      font-size: var(--fz-lg);
    }
    .mail-link {
      grid-column-start: 6;
      grid-column-end: 8;
    }
  }
  @include lg-screen {
    @include lg-grid;
    &__paragraph {
      grid-column-start: 3;
      grid-column-end: 11;
    }
  }
  @include xl-screen {
    &__paragraph {
      grid-column-start: 4;
      grid-column-end: 10;
    }
  }
}
</style>