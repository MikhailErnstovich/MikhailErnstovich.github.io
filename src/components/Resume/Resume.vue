<template>
  <article class="resume" :class="toggle ? 'resume_visible' : ''" @click="handleCVtoggle">
    <span class="resume__title" v-show="!toggle">{{ $t('resume.title') }}</span>
    <div class="resume__wrapper" v-show="toggle">
      <a href="/CV.docx" class="resume__link" @click="handleCVlink">{{ $t('resume.docx') }}</a>
      <a href="/CV.pdf" class="resume__link" @click="handleCVlink">{{ $t('resume.pdf') }}</a>
    </div>
  </article>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
const toggle = ref(false);
const handleCVtoggle = () => toggle.value = !toggle.value;
const handleCVlink = (e: Event) => {
  e.preventDefault();
  if (e.target instanceof Element) {
    const url = e.target.getAttribute('href');
    if (url) {
      window.open(url, '_black');
    }
  }
}
  
</script>
<style lang="scss" scoped>
.resume {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  width: max-content;
  margin: clamp(var(--s-lg), 2.757rem + 1.036vw, var(--s-xl)) 0 0;
  padding: clamp(1rem, 0.939rem + 0.259vw, 1.25rem) clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
  border-radius: 100px;
  background-color: var(--bays-1);
  font-size: clamp(0.875rem, 0.814rem + 0.259vw, 1.125rem);
  line-height: clamp(1.25rem, 1.068rem + 0.777vw, 2rem);
  text-transform: uppercase;
  color: #ffffff;
  transition: background-color 0.25s cubic-bezier(0.645,0.045,0.355,1);
  &:hover,
  &:focus {
    background-color: var(--primary-color);
  }
  &:active {
    background-color: var(--bays-3);
  }
  &_visible {
    padding: 0;
    background-color: transparent;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: calc(var(--s-xss) / 2);
    border-radius: 100px;
  }
  &__link {
    display: block;
    width: max-content;
    padding: clamp(1rem, 0.939rem + 0.259vw, 1.25rem) clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
    border-radius: 100px;
    background-color: var(--bays-1);
    font-size: clamp(0.875rem, 0.814rem + 0.259vw, 1.125rem);
    line-height: clamp(1.25rem, 1.068rem + 0.777vw, 2rem);
    text-transform: uppercase;
    color: #ffffff;
    user-select: none;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    &:hover,
    &:focus {
      background-color: var(--primary-color);
    }
    &:active {
      background-color: var(--bays-3);
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-child(2) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>