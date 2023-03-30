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
import About from './components/Sections/About.vue';
import Contacts from './components/Sections/Contacts.vue';
import Experience from './components/Sections/Experience.vue';
import Footer from './components/Footer/Footer.vue';
import { items as sectionTitles } from '~/components/Menu/menu-data';
const show = ref(false);

</script>

<style  lang="scss">

</style>
