<template>
    <section class="section">
      <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
        <span>Hi, my name is</span>
      </CustomTransition>
      <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
        <h1 class="big-title">Mikhail Makarov.</h1>
      </CustomTransition>
      <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
        <h2 class="big-title">I build things for the web.</h2>
      </CustomTransition>
      <CustomTransition :appear="true" :name="transitionNames[2]" :toggle="true">
        <p class="section__paragraph">
          I am a software engineer specializing in front-end application development. 
          I am currently part of the <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> 
          team developing a computer-telephony integration system.
        </p>
      </CustomTransition>
      <CustomTransition :appear="true" :name="transitionNames[1]" :toggle="true">
        <a href="/CV.pdf" class="resume-link">Check out my CV!</a>
      </CustomTransition>
    </section>
</template>
<script setup lang="tsx">
import CustomTransition from '~/components/Transitions/CustomTransition.vue';
const transitionNames = ['drop','rise','slide-left'];
</script>
<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  span {
    margin: 0 0 var(--s-xss);
    font-family: var(--font-regular);
    font-size: var(--fz-h-xs);
    line-height: var(--lh-h-xs);
    color: var(--bays-1);
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
  @include md-screen {
    padding: 0 var(--s-md);
  }
  @include lg-screen {
    padding: 0 var(--s-xl);
  }
  @include xl-screen {
    padding: 0 var(--s-xxl);
  }
}
.dark {
  .section {
    h2 {
      color: var(--boulders-2);
    }
    span {
      color: var(--bays-0);
    }
  }
}
</style>