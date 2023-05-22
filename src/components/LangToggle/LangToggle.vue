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
  default: 'en',
};
const handleSelect = (lang: string) => i18n.global.locale.value = lang;
</script>
<style lang="scss" scoped>

</style>