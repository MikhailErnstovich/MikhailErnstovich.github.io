<template>
  <header class="header">
      <Logo />
      <button class="menu-toggle" @click="toggleMenu">
        <el-icon v-if="show">
          <Close />
        </el-icon>
        <el-icon v-if="!show">
          <Menu />
        </el-icon>
      </button>
      <AsideMenu :toggle="show" @toggle-menu="toggleMenu"/>
  </header>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from '~/components/Menu/AsideMenu.vue';
import Logo from '~/components/Logo/Logo.vue';
import { Close, Menu } from '@element-plus/icons-vue';
const show = ref(false);
const emit = defineEmits(['toggleBlur']);
const toggleMenu = () => {
  show.value = !show.value;
  emit('toggleBlur', show.value);
}

</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header ~ .blur {
  filter: blur(5px) brightness(0.7);
}

.menu-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--bays-0);
  width: 50px;
  height: 50px;
  font-size: 36px;
  z-index: 2;
}
</style>