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
    display: block;
    margin: 0 0 clamp(0.5rem, 0.379rem + 0.518vw, 1rem);
    font-family: var(--font-regular);
    font-size: clamp(1rem, 0.7573rem + 1.0356vw, 2rem);
    line-height: clamp(1.5rem, 0.8932rem + 2.589vw, 2.5rem);
    color: var(--bays-1);
    letter-spacing: 2px;
  }
  .big-title {
    font-family: var(--font-medium);
    letter-spacing: 2px;
    font-size: clamp(2rem, 1.6359rem + 1.5534vw, 3.5rem);
    line-height: clamp(2rem, 0.8932rem + 2.589vw, 4rem);
  }
  h1 {
    margin: 0 0 0.5rem;
  }
  h2 {
    margin: 0 0 clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
    color: rgba(0,0,0, 0.8);
  }
  .resume-link {
    margin: clamp(3rem, 2.757rem + 1.036vw, 4rem) 0 0;
  }
  @include md-screen {
    &__paragraph {
      width: 80%;
    }
    .big-title {
      letter-spacing: 3px;
    }
  }
  @include lg-screen {
    .big-title {
      letter-spacing: 4px;
    }
  }
  @include xl-screen {
    .big-title {
      letter-spacing: 5px;
    }
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