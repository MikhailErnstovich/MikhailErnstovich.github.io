<template>
  <aside class="aside-menu">
    <button class="aside-menu__button aside-menu__button_close">
      <el-icon>
        <Close />
      </el-icon>
    </button>
    <nav class="navigation">
      <ol class="navigation-list">
        <li class="navigation-list__item">Home</li>
        <li class="navigation-list__item">About</li>
        <li class="navigation-list__item">Experience</li>
        <li class="navigation-list__item">Contact</li>
      </ol>
      <a href="/resume.pdf" class="resume-link">Resume</a>
    </nav>
    <ThemeToggle />
  </aside>
</template>

<script lang="tsx" setup>
import ThemeToggle from '~/components/ThemeToggle/ThemeToggle.vue';
import { Close } from '@element-plus/icons-vue';
</script>

<style lang="scss">
.aside-menu {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 86px 10px 50px 10px;
  border-left: 1px dotted grey;
  &__button {
    display: block;
    background-color: transparent;
    &_close {
      position: absolute;
      top: 36px;
      right: 36px;
      width: 36px;
      height: 36px;
      font-size: 36px;
    }
  }
}
.flex-grow {
  flex-grow: 1;
}
.navigation {
  &-list {
    list-style: none;
    &__item {

      counter-increment: item 1;
      &::before {
        content: "0" counter(item) ".";
        display: block;
        text-align: center;
      }
    }
  }
}
</style>