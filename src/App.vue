<template>
  <div class="wrapper">
    <button class="menu-toggle" @click="() => show = !show">
      <el-icon v-if="show">
        <Close />
      </el-icon>
      <el-icon v-if="!show">
        <Menu />
      </el-icon>
    </button>
    <transition name="fade">
      <AsideMenu v-show="show"/>
    </transition>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from './components/Menu/AsideMenu.vue';
import { Close, Menu } from '@element-plus/icons-vue';

const show = ref(false);
</script>

<style  lang="scss">
.menu-toggle {
  display: block;
  background-color: transparent;
  color: var(--bays-0);
  position: absolute;
  top: 36px;
  right: 36px;
  width: 36px;
  height: 36px;
  font-size: 36px;
  z-index: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
