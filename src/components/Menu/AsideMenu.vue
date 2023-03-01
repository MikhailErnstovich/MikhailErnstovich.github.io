<template>
  <aside class="aside-menu">
      <nav class="navigation">
      <ol class="navigation-list">
        <li class="navigation-list__item">Home</li>
        <li class="navigation-list__item">About</li>
        <li class="navigation-list__item">Experience</li>
        <li class="navigation-list__item">Contact</li>
      </ol>
      <a href="/resume.pdf" class="resume-link">Resume</a>
    </nav>
    <ThemeToggle class="aside-menu__theme-toggle"/>
  </aside>
</template>

<script lang="tsx" setup>
import ThemeToggle from '~/components/ThemeToggle/ThemeToggle.vue';


function toogleMenu() {
  
}
</script>

<style lang="scss">
.dark .aside-menu {
  background-color: var(--bays-3);
}
.aside-menu {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 86px 10px;
  &__button {
    display: block;
    background-color: transparent;
    color: var(--bays-0);
    &_close {
      position: absolute;
      top: 36px;
      right: 36px;
      width: 36px;
      height: 36px;
      font-size: 36px;
    }
  }
  &__theme-toggle {
    position: absolute;
    top: 36px;
    left: 36px;
  }
}

.navigation {
  &-list {
    list-style: none;
    &__item {
      padding: 0 20px 20px 20px;
      text-align: center;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 6vw, var(--fz-xl));
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
      cursor: pointer;
      &:hover {
        color: var(--bays-0);
      }
      &::before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        text-align: center;
        color: var(--bays-0)
      }
    }
  }
}
.resume-link {
  display: block;
  width: max-content;
  margin: 10% auto 0;
  padding: 18px 50px;
  font-size: clamp(var(--fz-sm), 6vw, var(--fz-lg));
  border: 1px solid var(--bays-0);;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  &:hover {
    background-color: var(--bays-0-op2);
  }
}
</style>