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
        <p class="section__paragraph">
          I am a software engineer specializing in front-end application development. 
          I am currently part of the <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> 
          team developing a computer-telephony integration system.
        </p>
        <a href="/CV.pdf" class="resume-link link">Check out my CV!</a>
      </section>
      <section class="section section_numbered" :id="sectionTitles[0].id">
        <div class="section__title-wrapper">
          <h2 class="section__title"  >
            <span class="section__title-text">{{ sectionTitles[0].title }}</span>
          </h2>
        </div>
        <p class="section__paragraph section__paragraph_justify">
          My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
          While on quarantine, I decided to try myself in another area and went
          through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
          That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
          Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
        </p>
        <p class="section__paragraph section__paragraph_justify">
          There are some key technologies below I have been working with up to date:
        </p>
        <Skills />

      </section>
      <section class="section section_numbered" :id="sectionTitles[1].id">
        <div class="section__title-wrapper">
          <h2 class="section__title">
            <span class="section__title-text">{{ sectionTitles[1].title }}</span>
          </h2>
        </div>
        <Timeline />
      </section>
      <section class="section section_numbered" :id="sectionTitles[2].id">
        <div class="section__title-wrapper">
          <h2 class="section__title">
            <span class="section__title-text">{{ sectionTitles[2].title }}</span>
          </h2>
        </div>
        <Map />
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
import Timeline from './components/Timeline/Timeline.vue';
import { Close, Menu } from '@element-plus/icons-vue';
import { items as sectionTitles } from '~/components/Menu/menu-data';
import Skills from './components/Skills/Skills.vue';
import Map from './components/Map/Map.vue';
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
.shift-leave-from {
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
