<template>
  <article class="lang-toggle-1">
    <select v-model="$i18n.locale">
      <option 
        v-for="locale in $i18n.availableLocales" 
        :key="`locale-${locale}`" 
        :value="locale">
          {{ locale }}
        </option>
    </select>

  </article>
</template>
<script setup lang="tsx">
import i18n from '~/plugins/i18n';
import { ref, onMounted } from 'vue';
const imgUrls = {
  sm:  new URL('~/assets/icons/locale.svg', import.meta.url).href,
}

const setLocale = () => {
  const locales = i18n.global.availableLocales;
}

</script>
<style lang="scss" scoped>

</style>