<template>
  <div class="wrapper">
    <header class="header">
      <button class="menu-toggle" @click="() => show = !show">
      <el-icon v-if="show">
        <Close />
      </el-icon>
      <el-icon v-if="!show">
        <Menu />
      </el-icon>
    </button>
    <transition name="shift">
      <AsideMenu v-show="show" @toggle-menu="() => show = false"/>
    </transition>
    </header>
    <main class="main" :class="show ? 'blur' : ''">
      <section class="section section_intro">
        <h1>Hi, my name is</h1>
        <h2 class="big-title">Mikhail Makarov.</h2>
        <h3 class="big-title">I build things for the web.</h3>
        <p>
          I am a software engineer specializing in front-end application development. 
          I am currently part of the <a href="https://flat-soft.ru/">FlatSoftware</a> team developing a computer-telephony integration system.
        </p>
      </section>

    </main>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from './components/Menu/AsideMenu.vue';
import { Close, Menu } from '@element-plus/icons-vue';

const show = ref(false);
</script>

<style  lang="scss">
.header {
  height: 100px;
  padding: 0 25px;
}
.main {
  padding: 0 25px;
}
.blur {
  filter: blur(5px) brightness(0.7);
}
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
  z-index: 2;
}

.shift-enter-to,
.shif-leave-from {
  transform: translateX(0);
}
.shift-enter-active,
.shift-leave-active {
  transition: transform 0.5s ease;
}

.shift-enter-from,
.shift-leave-to {
  transform: translateX(100vw);
}
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
}
</style>
