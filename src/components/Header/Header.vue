<template>
  <header ref="header" class="header">
    <CustomTransition :toggle="true" :appear="true" :name="'slide-right'">
      <router-link to="/" aria-label="home page">
        <Logo />
      </router-link>
    </CustomTransition>
    <CustomTransition :toggle="true" :appear="true" :name="'slide-left'">
      <button class="menu-toggle" aria-label="Open Menu" @click="toggleMenu">
        <img
          v-if="!show"
          class="menu-toggle__icon menu-toggle__icon_hamburger"
          alt="open menu"
          :src="hamburgerIcon"
        />
        <img
          v-else
          class="menu-toggle__icon menu-toggle__icon_cross"
          alt="close menu"
          :src="crossIcon"
        />
      </button>
    </CustomTransition>
    <AsideMenu :toggle="show" @toggle-menu="toggleMenu" />
    <TopMenu />
  </header>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from '~/components/Menu/AsideMenu.vue';
import TopMenu from '~/components/Menu/TopMenu.vue';
import Logo from '~/components/Logo/Logo.vue';
import CustomTransition from '~/components/Transitions/CustomTransition.vue';
import handleSticky from '~/helpers/sticky-handler';
const hamburgerIcon = new URL('~/assets/icons/hamburger.svg', import.meta.url)
  .href;
const crossIcon = new URL('~/assets/icons/cross.svg', import.meta.url).href;

const show = ref(false);
const emit = defineEmits(['toggleBlur']);
const toggleMenu = () => {
  show.value = !show.value;
  emit('toggleBlur', show.value);
};
window.onscroll = () => handleSticky(header.value);
const header = ref<HTMLInputElement | null>(null);
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: calc(var(--s-xs) * 2 + var(--fz-h-sm));
  z-index: 2;
  padding: var(--s-xs);
}
.sticky {
  box-shadow: 0 0 8px #000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}
.animation-wrapper:nth-child(2) {
  z-index: 2;
}
.menu-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--bays-1);
  width: var(--fz-h-sm);
  padding: 0;
  margin: 0;
  @include filter-bays-1;
  transition: filter 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    @include filter-primary;
  }
  &:active {
    @include filter-bays-3;
  }
  &__icon {
    width: var(--fz-h-sm);
    aspect-ratio: 1 / 1;
  }
  @include md-screen {
    display: none;
  }
}
.dark {
  .menu-toggle {
    @include filter-bays-0;
    &:hover,
    &:focus {
      @include filter-bays-1;
    }
    &:active {
      @include filter-primary;
    }
  }
  .sticky {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
