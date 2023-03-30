<template>
  <section class="section section_numbered" :id="props.title.id">
    <div class="section__title-wrapper">
      <h2 class="section__title">
        <span class="section__title-text">{{ props.title.title }}</span>
      </h2>
    </div>
    <p class="section__paragraph">
      My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
      While on quarantine, I decided to try myself in another area and went
      through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
      That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
      Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
    </p>
    <Photo />
    <p class="section__paragraph">
      There are some key technologies below I have been working with up to date:
    </p>
    <Skills />
  </section>
</template>
<script setup lang="tsx">
import Skills from '~/components/Skills/Skills.vue';
import Photo from '~/components/Photo/Photo.vue';
import { MenuItem } from '~/components/Menu/menu-data';
import AppearTransition from '~/components/AppearTransition/AppearTransition.vue';
const props = defineProps<{
  title: MenuItem 
}>();
</script>
<style lang="scss" scoped>

</style>