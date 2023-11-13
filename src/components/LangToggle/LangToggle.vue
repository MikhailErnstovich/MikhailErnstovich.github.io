<template>
  <article class="lang-toggle">
    <CustomSelect :options="options" @select="handleSelect"/>
  </article>
</template>
<script setup lang="tsx">
import i18n from '~/plugins/i18n';
import CustomSelect from '~/components/CustomSelect/CustomSelect.vue';

const options = {
  list: i18n.global.availableLocales,
  default: localStorage.getItem('locale') || 'en',
};
const handleSelect = (lang: string) => {
  i18n.global.locale.value = lang as 'en' | 'ru';
  localStorage.setItem('locale', lang);
  setFont(lang as 'en' | 'ru');
};

const setFont = (lang: 'en' | 'ru') => {
  const root = document.documentElement;
  switch (lang) {
    case 'ru': 
      root.style.setProperty('--font-regular', 'NunitoSans-regular, sans-serif');
      root.style.setProperty('--font-bold', 'NunitoSans-bold, sans-serif');
      root.style.setProperty('--font-light', 'NunitoSans-light, sans-serif');
      root.style.setProperty('--font-medium', 'NunitoSans-medium, sans-serif');
      break;
    case 'en': 
      root.style.setProperty('--font-regular', 'Intel-regular');
      root.style.setProperty('--font-bold', 'Intel-bold');
      root.style.setProperty('--font-light', 'Intel-light');
      root.style.setProperty('--font-medium', 'Intel-medium');
      break;
    default: 
      root.style.setProperty('--font-regular', 'Intel-regular');
      root.style.setProperty('--font-bold', 'Intel-bold');
      root.style.setProperty('--font-light', 'Intel-light');
      root.style.setProperty('--font-medium', 'Intel-medium');
  }
}
</script>
<style lang="scss" scoped>

</style>