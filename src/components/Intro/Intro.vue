<template>
    <section class="section section_intro">
      <transition appear>
        <span>Hi, my name is</span>
      </transition>
      <transition appear>
        <h1 class="big-title">Mikhail Makarov.</h1>
      </transition>
      <transition appear>
        <h2 class="big-title">I build things for the web.</h2>
      </transition>
      <transition appear>
        <p class="section__paragraph">
          I am a software engineer specializing in front-end application development. 
          I am currently part of the <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> 
          team developing a computer-telephony integration system.
        </p>
      </transition>
      <transition appear>
        <a href="/CV.pdf" class="resume-link">Check out my CV!</a>
      </transition>
    </section>
</template>
<script setup lang="tsx">
import { onMounted, ref } from 'vue';

</script>
<style lang="scss" scoped>
.section_intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  span {
    margin: 0 0 var(--s-xss);
    font-family: var(--font-regular);
    font-size: var(--fz-h-xs);
    line-height: var(--lh-h-xs);
    color: var(--bays-0);
    letter-spacing: 2px;
  }
  .big-title {
    font-family: var(--font-medium);
    letter-spacing: 3px;
    font-size: var(--fz-h-sm);
    line-height: var(--lh-h-sm);
  }
  h2 {
    margin: 0 0 var(--s-sm);
    color: rgba(0,0,0, 0.8);
  }
  .resume-link {
    margin: var(--s-lg) 0 0;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s cubic-bezier(0.645,0.045,0.355,1);;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.section_intro {
  :nth-child(2) {
    transition-delay: .2s;
  }
  :nth-child(3) {
    transition-delay: .4s;
  }
  :nth-child(4) {
    transition-delay: .6s;
  }
  :nth-child(5) {
    transition-delay: .8s;
  }
}
</style>