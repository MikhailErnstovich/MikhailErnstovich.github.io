<template>
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
</template>
<script setup lang="tsx">

</script>
<style lang="scss" scoped>
.section_intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  h1 {
    margin: 0 0 var(--s-xs);
    font-family: var(--font-light);
    font-size: var(--fz-lg);
    color: var(--bays-0);
    letter-spacing: 2px;
  }
  h2 {
    font-family: var(--font-medium);
    letter-spacing: 3px;
    font-size: var(--fz-heading);
    color: var(--bouldes-0)
  }
  h3 {
    margin: 0 0 var(--s-md);
    font-family: var(--font-medium);
    font-size: var(--fz-heading);
    letter-spacing: 2px;
    opacity: 0.7;
  }
  .resume-link {
    margin: var(--s-xl) 0 0;
  }
}
</style>