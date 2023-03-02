<template>
  <div class="wrapper">
    <header class="header">
      <Logo />
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
          I am currently part of the <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> team developing a computer-telephony integration system.
        </p>
        <a href="/CV.pdf" class="resume-link">Check out my CV!</a>
      </section>
      <section class="section section_numbered">
        <h2 class="section__title"  :id="sectionTitles[0].id">
          <span>{{ sectionTitles[0].title }}</span>
        </h2>
      </section>
      <section class="section section_numbered">
        <h2 class="section__title" :id="sectionTitles[1].id">
          <span>{{ sectionTitles[1].title }}</span>
        </h2>
      </section>
      <section class="section section_numbered">
        <h2 class="section__title" :id="sectionTitles[2].id">
          <span>{{ sectionTitles[2].title }}</span>
        </h2>
      </section>
      <section class="section section_numbered">
        <h2 class="section__title" :id="sectionTitles[3].id">
          <span>{{ sectionTitles[3].title }}</span>
        </h2>
      </section>
    </main>
    <footer class="footer">
      Design & Built by Mikhail Makarov
    </footer>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import AsideMenu from './components/Menu/AsideMenu.vue';
import Logo from './components/Logo/Logo.vue';
import { Close, Menu } from '@element-plus/icons-vue';
import { items as sectionTitles } from '~/components/Menu/menu-data';
const show = ref(false);
</script>

<style  lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 25px;
  z-index: 2;
}
.main {
  padding: 0 25px; 
}
.blur {
  filter: blur(5px) brightness(0.7);
}
.section {
  &_intro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      margin: 0 0 20px 2px;
      font-family: var(--font-light);
      color: var(--bays-0);
    }
    h2 {
      font-family: var(--font-medium);
      letter-spacing: 3px;
      font-size: 2em;
      color: var(--bouldes-0)
    }
    h3 {
      margin: 0 0 10px 0;
      font-family: var(--font-medium);
      font-size: 2em;
      opacity: 0.7;
    }
    .resume-link {
      margin: 40px 0 0 0;
    }
  }
}
.menu-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--bays-0);
  position: absolute;
  right: 25px;
  top: 0;
  width: 36px;
  height: 100px;
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
