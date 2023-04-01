<template>
  <div class="wrapper">
    <Header @toggle-blur="(isBlur) => show = isBlur"/>
    <main class="main" :class="show ? 'blur' : ''">
      <Intro />
      <About :title="sectionTitles[0]" />
      <Experience :title="sectionTitles[1]" />
      <Contacts :title="sectionTitles[2]" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import Header from './components/Header/Header.vue';
import Intro from './components/Sections/Intro.vue';
import { items as sectionTitles } from '~/components/Menu/menu-data';
import { defineAsyncComponent } from 'vue'
const show = ref(false);

const About = defineAsyncComponent(() => import('~/components/Sections/About.vue'));
const Experience = defineAsyncComponent(() => import('~/components/Sections/Experience.vue'));
const Contacts = defineAsyncComponent(() => import('~/components/Sections/Contacts.vue'));
const Footer = defineAsyncComponent(() => import('~/components/Footer/Footer.vue'));
</script>

<style  lang="scss">

</style>
