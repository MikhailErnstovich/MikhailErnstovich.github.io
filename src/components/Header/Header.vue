<template>
  <header class="header">
    <CustomTransition :toggle="true" :appear="true" :name="'slide-right'">
      <Logo />
    </CustomTransition>
    <CustomTransition :toggle="true" :appear="true" :name="'slide-left'">
      <button class="menu-toggle" @click="toggleMenu" aria-label="Open Menu">
        <el-icon v-if="show">
          <Close />
        </el-icon>
        <el-icon v-if="!show">
          <Menu />
        </el-icon>
      </button>
    </CustomTransition>
    <AsideMenu :toggle="show" @toggle-menu="toggleMenu"/>
  </header>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from '~/components/Menu/AsideMenu.vue';
import Logo from '~/components/Logo/Logo.vue';
import { Close, Menu } from '@element-plus/icons-vue';
import CustomTransition from '~/components/Transitions/CustomTransition.vue';


const show = ref(false);
const emit = defineEmits(['toggleBlur']);
const toggleMenu = () => {
  show.value = !show.value;
  emit('toggleBlur', show.value);
}

</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 50px;
  height: 50px;
  font-size: 36px;
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
}
</style>