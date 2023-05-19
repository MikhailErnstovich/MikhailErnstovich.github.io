<template>
  <section class="section intro">
    <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
      <span class="intro__hello">{{ $t('intro.hello') }}</span>
    </CustomTransition>
    <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
      <h1 class="intro__title big-title">{{ $t('intro.title') }}</h1>
    </CustomTransition>
    <CustomTransition :appear="true" :name="transitionNames[0]" :toggle="true">
      <h2 class="intro__subtitle big-title">
        {{ $t('intro.subtitle') }}
      </h2>
    </CustomTransition>
    <CustomTransition :appear="true" :name="transitionNames[2]" :toggle="true">
      <p class="section__paragraph">
        <span class="intro__text-1">{{ $t('intro.text-1') }}</span>
        <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> 
        <span class="intro__text-2">{{ $t('intro.text-2') }}</span>
      </p>
    </CustomTransition>
    <CustomTransition :appear="true" :name="transitionNames[1]" :toggle="true">
      <a href="/CV.pdf" class="intro__resume-link resume-link">{{ $t('intro.resume-link') }}</a>
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
  min-height: 100vh;
  .big-title {
    font-family: var(--font-medium);
    letter-spacing: 2px;
    font-size: clamp(var(--fz-h-sm), 1.6359rem + 1.5534vw, var(--fz-h-lg));
    line-height: clamp(var(--lh-h-xs), 0.8932rem + 2.589vw, var(--lh-h-lg));
  }
  h1 {
    margin: 0 0 0.5rem;
  }
  h2 {
    margin: 0 0 clamp(var(--s-sm), 1.379rem + 0.518vw, var(--s-md));
    color: rgba(0,0,0, 0.8);
    i {
      font-style: normal;
    }
    sup {
      font-size: 0.5em;
      color: var(--bays-1);
    }
  }
  .resume-link {
    margin: clamp(var(--s-lg), 2.757rem + 1.036vw, var(--s-xl)) 0 0;
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
.intro__hello {
  display: block;
  margin: 0 0 clamp(var(--s-xss), 0.379rem + 0.518vw, var(--s-xs));
  font-family: var(--font-regular);
  font-size: clamp(var(--fz-md), 0.7573rem + 1.0356vw, var(--fz-h-sm));
  line-height: clamp(var(--lh-md), 0.8932rem + 2.589vw, var(--lh-h-sm));
  color: var(--bays-1);
  letter-spacing: 2px;
}
.dark {
  .section {
    h2 {
      color: var(--boulders-2);
      sup: {
        color: var(--bays-0);
      }
    }
  }
  .intro__hello {
    color: var(--bays-0);
  }
}
</style>