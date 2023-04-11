<template>
  <transition name="shift" v-show="props.toggle">
    <aside class="aside-menu">
      <div class="aside-menu__filler" @click="toggleMenu"></div>
      <div class="aside-menu__wrapper">
        <ThemeToggle class="aside-menu__theme-toggle"/>
        <nav class="navigation">
          <menu class="navigation-list">
            <li class="navigation-list__item" v-for="item in items">
              <a 
                class="navigation-list__item-link" 
                :href="'#' + item.id"
                @click="toggleMenu"
              >
                {{ getMenuItemTitle(item) }}
              </a>
            </li>
          </menu>
          <a href="/CV.pdf" class="resume-link">Check out my CV!</a>
        </nav>
      </div>
    </aside>
  </transition>
</template>

<script lang="tsx" setup>
import ThemeToggle from '~/components/ThemeToggle/ThemeToggle.vue';
import { items, MenuItem } from './menu-data';

const props = defineProps<{
  toggle: boolean 
}>();

const emit = defineEmits(['toggleMenu']);
const toggleMenu = () => emit('toggleMenu');

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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: calc(var(--s-sm) + var(--fz-h-sm)) 1fr;
    width: 80%;
    height: 100%;
    background-color: var(--boulders-0);
    box-shadow: -10px 0px 30px -15px var(--bays-4-07);
  }
  &__theme-toggle {
    grid-row-start: 1;
    grid-row-end: 2;
    margin: var(--s-xs) 0 0 var(--s-xs);
  }
  .navigation {
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
    margin-bottom: calc(var(--s-sm) + var(--fz-h-sm));
  }
  @include md-screen {
    &__filler {
      flex-grow: 1;
    }
    &__wrapper {
      width: min(75vw, 400px);
    }
    &__theme-toggle {
      margin: var(--s-sm) 0 0 var(--s-sm);
    }
  }
}

.navigation {
  &-list {
    list-style: none;
    &__item {
      padding: 0 20px 20px 20px;
      text-align: center;
      counter-increment: item 1;
      font-size: var(--fz-lg);
      letter-spacing: 2px;
      color: var(--boulders-4);
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
      cursor: pointer;
      &:hover,
      &:focus {
        color: var(--primary-color);
      }
      &:active {
        color: var(--bays-3);
      }
      &-link {
        display: block;
        &:visited {
          color: inherit;
        }
        &:hover::before,
        &:focus::before {
          color: var(--primary-color);
        }
        &:active::before {
          color: var(--bays-3);
        }
        &::before {
          content: "0" counter(item) ".";
          display: block;
          margin-bottom: 5px;
          text-align: center;
          color: var(--primary-color);
        }
      }
    }
  }
  @include md-screen {
    &-list{
      &__item {
        font-size: var(--fz-h-xs);
        line-height: var(--lh-h-xs);
        letter-spacing: 2px;
      }
    }
  }
}

.shift-enter-to,
.shift-leave-from {
  transform: translateX(0);
}
.shift-enter-active,
.shift-leave-active {
  transition: transform 0.5s cubic-bezier(0.645,0.045,0.355,1);
}

.shift-enter-from,
.shift-leave-to {
  transform: translateX(100vw);
}
.resume-link {
  margin: 10% auto 0;
  letter-spacing: 2px;
}

.dark {
  .aside-menu {
    &__wrapper {
      background-color: var(--bays-4);
    }
  }
  .navigation-list__item-link {
    color: var(--boulders-0);
    &:visited {
      color: var(--boulders-0);
    }
    &:hover,
    &:focus {
      color: var(--bays-1);
    }
    &:active {
      color: var(--primary-color);
    }
    &:hover::before,
    &:focus::before {
      color: var(--bays-1);
    }
    &:active::before {
      color: var(--primary-color);
    }
    &::before {
      color: var(--bays-0);
    }
  }
}
</style>