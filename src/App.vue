<template>
  <div class="wrapper">
    <Header @toggle-blur="(isBlur) => show = isBlur"/>
    <div class="view-wrapper" :class="show ? 'blur' : ''">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="tsx">
import { ref, defineAsyncComponent, watch } from 'vue';
import Header from './components/Header/Header.vue';
import { setLocale } from '~/helpers/locale';

setLocale();
const show = ref(false);
watch (() => show.value, (newVal, oldVal) => document.body.classList.toggle('no-scroll-y'));

const Footer = defineAsyncComponent(() => import('~/components/Footer/Footer.vue'));
</script>

<style  lang="scss">

</style>
