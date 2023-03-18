<template>
  <aside class="aside-menu">
    <div class="aside-menu__filler" @click="toggleMenu"></div>
    <div class="aside-menu__wrapper">
      <nav class="navigation">
        <ol class="navigation-list">
          <li class="navigation-list__item" v-for="item in items">
            <a 
              class="navigation-list__item-link" 
              :href="'#' + item.id"
              @click="toggleMenu"
            >
              {{ getMenuItemTitle(item) }}
            </a>
          </li>
        </ol>
        <a href="/CV.pdf" class="resume-link link">Resume</a>
      </nav>
      <ThemeToggle class="aside-menu__theme-toggle"/>
    </div>
  </aside>
</template>

<script lang="tsx" setup>
import ThemeToggle from '~/components/ThemeToggle/ThemeToggle.vue';
import { items, MenuItem } from './menu-data';

const emit = defineEmits(['toggleMenu']);
function toggleMenu() {
  emit('toggleMenu');
}

function getMenuItemTitle(item: MenuItem): string {
  return item.title[0].toUpperCase() + item.title.slice(1);
}
</script>

<style lang="scss" scoped>
.aside-menu {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  width: 100%;
  &__filler {
    width: 20%;
  }
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 86px 10px;
    background-color: var(--boulders-0);
    box-shadow: -10px 0px 30px -15px var(--bays-4-07);
  }
  &__theme-toggle {
    position: absolute;
    top: 36px;
    left: 36px;
  }
}
.dark .aside-menu {
  &__wrapper {
    background-color: var(--bays-4);
  }
}
@media (min-width: 768px) {
  .aside-menu {
    display: none;
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
      letter-spacing: 2px;
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
      cursor: pointer;
      &:hover {
        color: var(--bays-0);
      }
      &-link {
        display: block;
        color: black;
        &:visited,
        &:focus, 
        &:active {
          color: black;
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
}
.dark {
  .navigation-list__item-link {
    color: var(--boulders-0);
    &:visited,
    &:focus, 
    &:active {
      color: var(--boulders-0);
    } 
  }
}
.resume-link {
  margin: 10% auto 0;
  letter-spacing: 2px;
}
</style>