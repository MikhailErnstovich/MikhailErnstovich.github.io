<template>
  <section class="section section_numbered" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph animation animation_opacity animation_slide-left start" v-appear-transition>
      My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
      While on quarantine, I decided to try myself in another area and went
      through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
      That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
      Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
    </p>
    <Photo  class="animation animation_opacity animation_drop start" v-appear-transition/>
    <div class="section__skills-wrapper">
      <p class="section__paragraph animation animation_opacity animation_slide-left start" v-appear-transition>
        There are some key technologies below I have been working with up to date:
      </p>
      <Skills />
    </div>
  </section>
</template>
<script setup lang="tsx">
import Skills from '~/components/Skills/Skills.vue';
import Photo from '~/components/Photo/Photo.vue';
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
.section {
  &__skills-wrapper {
    .section__paragraph {
      margin-bottom: var(--s-xss);
    }
  }
  @include md-screen {
    @include md-grid;
    row-gap: var(--s-sm);
    padding: 0 var(--s-md);
    font-size: var(--fz-lg);
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &__paragraph:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 2;
      grid-row-end: 3;
      text-align: justify;
      text-indent: 2em;
    }
    .photo {
      grid-column-start: 8;
      grid-column-end: 12;
      grid-row-start: 3;
      grid-row-end: 4;
      margin: 0;
      padding: 0;
      max-width: 300px;
      align-self: start;
    }
    &__skills-wrapper {
      grid-column-start: 1;
      grid-column-end: 8;
      grid-row-start: 3;
      grid-row-end: 4;
      .section__paragraph {
        text-indent: 2em;
        text-align: justify;
      }
    }
  }
  @include lg-screen {
    @include lg-grid;
    font-size: var(--fz-xl);
    padding: 0 var(--s-xl);
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &__paragraph:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 7;
      grid-row-start: 2;
      grid-row-end: 3;
      text-align: justify;
      text-indent: 2em;
    }
    .photo {
      grid-column-start: 7;
      grid-column-end: 13;
      grid-row-start: 2;
      grid-row-end: 4;
      margin: 0 auto;
      padding: 0;
      max-width: 360px;
      align-self: center;
    }
    &__skills-wrapper {
      grid-column-start: 1;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 4;
      .section__paragraph {
        text-indent: 2em;
      }
    }
  }
  @include xl-screen {
    padding: 0 var(--s-xxl);
  }
}
</style>