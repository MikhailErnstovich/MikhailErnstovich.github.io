<template>
  <div class="wrapper">
    <Header @toggle-blur="(isBlur) => show = isBlur"/>
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
        <p class="section__paragraph section__paragraph_no-margin">
          My name is Mikhail Makarov. I started my way in the field of web development in early 2020.
          While on quarantine, I decided to try myself in another area and went
          through the <a class="link" href="https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8">HTML, CSS and JS course by JSC Yandex and MIPT</a>. 
          That resulted in my new hobby and changing my career direction from <a class="link" href="https://www.youtube.com/watch?v=gsTl2qkWnp0">silicon photonics</a> to web development.
          Today I work remotely as a frontend developer in <a class="link" href="https://flat-soft.ru/">FlatSoftware</a>.
        </p>
        <Photo />
        <p class="section__paragraph">
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
        <p class="section__paragraph section__paragraph_center">
          I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible.
        </p>
        <a
          class="link mail-link" 
          target="_blank"
          :href="contacts.email.link"
        >
          Send message
        </a>
        <Map />
      </section>
    </main>
    <footer class="footer">
      <SocialMedia />
      <Authorship />
    </footer>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import Header from './components/Header/Header.vue';
import Timeline from './components/Timeline/Timeline.vue';
import { items as sectionTitles } from '~/components/Menu/menu-data';
import Skills from './components/Skills/Skills.vue';
import Map from './components/Map/Map.vue';
import SocialMedia from './components/SocialMedia/SocialMedia.vue';
import { contacts } from './components/SocialMedia/social-media-data';
import Authorship from './components/Authorship/Authorship.vue';
import Photo from './components/Photo/Photo.vue';
const show = ref(false);

</script>

<style  lang="scss">

</style>
