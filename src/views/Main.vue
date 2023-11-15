<template>
  <main class="main">
    <Intro />
    <div :id="sectionTitles[0].id"></div>
    <About :title="sectionTitles[0]" />
    <Experience :title="sectionTitles[1]" />
    <Contacts :title="sectionTitles[2]" />
  </main>
</template>

<script setup lang="tsx">
import { defineAsyncComponent, computed } from 'vue';
import Intro from '~/components/Sections/Intro.vue';
import { itemData } from '~/components/Menu/menu-data';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const sectionTitles = computed(() => itemData[locale.value as 'en' | 'ru']);
const About = defineAsyncComponent(() => import('~/components/Sections/About.vue'));
const Experience = defineAsyncComponent(() => import('~/components/Sections/Experience.vue'));
const Contacts = defineAsyncComponent(() => import('~/components/Sections/Contacts.vue'));

</script>

<style  lang="scss">

</style>
