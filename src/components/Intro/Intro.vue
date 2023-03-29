<template>
  <section class="section section_intro">
    <span>Hi, my name is</span>
    <h1 class="big-title">Mikhail Makarov.</h1>
    <h2 class="big-title">I build things for the web.</h2>
    <p class="section__paragraph">
      I am a software engineer specializing in front-end application development. 
      I am currently part of the <a class="link" href="https://flat-soft.ru/">FlatSoftware</a> 
      team developing a computer-telephony integration system.
    </p>
    <a href="/CV.pdf" class="resume-link">Check out my CV!</a>
  </section>
</template>
<script setup lang="tsx">

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
    opacity: 0.7;
  }
  .resume-link {
    margin: var(--s-lg) 0 0;
  }
}
</style>