<template>
  <main class="projects">
    <ProjectGallery :title="sectionTitles[3]" />
  </main>
</template>

<script setup lang="tsx">
import ProjectGallery from '~/components/Sections/ProjectGallery.vue';
import { itemData } from '~/components/Menu/menu-data';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n({ useScope: 'global' });
const sectionTitles = computed(() => itemData[locale.value as 'en' | 'ru']);
</script>

<style lang="scss">
.projects .section__title {
  counter-set: section 3;
}
</style>
