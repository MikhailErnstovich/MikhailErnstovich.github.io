<template>
  <section class="section section_numbered" :id="props.title.id">
    <div class="section__title-wrapper animation animation_opacity animation_drop start" v-appear-transition>
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <div class="section__text-content">
      <p class="section__paragraph animation animation_opacity animation_slide-left start" v-appear-transition>
        <span class="about__text-1">{{ $t('about.text-1') }}</span>
        <a class="link about__link-1" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">
          {{ $t('about.link-1') }}
        </a>
        <span class="about__text-2">{{ $t('about.text-2') }}</span>
        <a class="link about__link-2" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">
          {{ $t('about.link-2') }}
        </a>
        <span class="about__text-3">{{ $t('about.text-3') }}</span>
        <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
      </p>
      <p class="section__paragraph about__text-4 animation animation_opacity animation_slide-left start" v-appear-transition>
        {{ $t('about.text-4') }}
      </p>
      <Skills />
    </div>
    <Photo  class="animation animation_opacity animation_drop start" v-appear-transition/>
    <div class="section__skills-wrapper">
      <p class="section__paragraph about__text-4 animation animation_opacity animation_slide-left start" v-appear-transition>
        {{ $t('about.text-4') }}
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
  display: flex;
  flex-direction: column;
  &__title-wrapper {
    order: 1;
  }
  &__text-content {
    order: 2;
    .skills,
    .section__paragraph:nth-child(2) {
      display: none;
    }
  }
  .photo {
    order: 3;
  }
  &__skills-wrapper {
    order: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__skills-wrapper {
    .section__paragraph {
      margin-bottom: clamp(var(--s-xss), 0.257rem + 1.036vw, var(--s-sm));
    }
  }
  @include md-screen {
    @include md-grid;
    column-gap: var(--s-sm);
    .section__paragraph {
      text-indent: 3em;
      &:first-child {
        margin-bottom: clamp(var(--s-xs), 0.757rem + 1.036vw, var(--s-md));
      }
    }
    &__title-wrapper {
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &__text-content {
      grid-column-start: 1;
      grid-column-end: 13;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .photo {
      grid-column-start: 8;
      grid-column-end: 13;
      grid-row-start: 3;
      grid-row-end: 4;
      margin: 0;
      padding: 0;
      justify-self: center;
    }
    &__skills-wrapper {
      display: block;
      grid-column-start: 1;
      grid-column-end: 8;
      grid-row-start: 3;
      grid-row-end: 4;
      .section__paragraph {
        text-align: justify;
        &:first-child {
          margin-bottom: clamp(var(--s-xs), 0.606rem + 0.821vw, calc(var(--s-xs) * 1.25));
        }
      }

    }
  }
  @include lg-screen {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &__title-wrapper {
      width: 100%
    }
    &__text-content {
      max-width: calc(100% - 600px);
      .skills,
      .section__paragraph:nth-child(2) {
        display: block;
        margin-bottom: clamp(var(--s-xs), 0.527rem + 0.602vw, calc(var(--s-xs) * 1.25));
      }
    }
    &__skills-wrapper {
      display: none;
    }
    .photo {
      max-width: 560px;
    }
  }
}
</style>