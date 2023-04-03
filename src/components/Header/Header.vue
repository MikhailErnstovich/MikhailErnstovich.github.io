<template>
  <header class="header">
    <CustomTransition :toggle="true" :appear="true" :name="'slide-right'">
      <Logo />
    </CustomTransition>
    <CustomTransition :toggle="true" :appear="true" :name="'slide-left'">
      <button 
        class="menu-toggle"
        aria-label="Open Menu" 
        @click="toggleMenu"
      >
        <img 
          class="menu-toggle__icon menu-toggle__icon_hamburger"
          alt="open menu" 
          :src="hamburgerIcon"  
          v-if="!show"
        />
        <img 
          class="menu-toggle__icon menu-toggle__icon_cross"
          alt="close menu" 
          :src="crossIcon"  
          v-else
        />
      </button>
    </CustomTransition>
    <AsideMenu :toggle="show" @toggle-menu="toggleMenu"/>
  </header>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from '~/components/Menu/AsideMenu.vue';
import Logo from '~/components/Logo/Logo.vue';
import CustomTransition from '~/components/Transitions/CustomTransition.vue';

const hamburgerIcon = new URL('~/assets/icons/hamburger.svg', import.meta.url).href;
const crossIcon = new URL('~/assets/icons/cross.svg', import.meta.url).href;

const show = ref(false);
const emit = defineEmits(['toggleBlur']);
const toggleMenu = () => {
  show.value = !show.value;
  emit('toggleBlur', show.value);
}

</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: calc(var(--s-sm) + var(--fz-h-sm));
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
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  &:hover,
  &:focus {
    color: var(--primary-color);
  }
  &:active {
    color: var(--bays-3);
  }
  @include lg-screen {
    display: none;
  }
  &__icon {
    width: var(--fz-h-sm);
    aspect-ratio: 1 / 1;
  }
}
</style>