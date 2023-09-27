<template>
  <article class="top-menu">
      <nav class="navigation">
        <menu class="navigation-list">
          <li class="navigation-list__item" v-for="item in items">
            <a class="navigation-list__item-link" :href="'#' + item.id">
              {{ getMenuItemTitle(item) }}
            </a>
          </li>
        </menu>
        <ThemeToggle class="top-menu__theme-toggle"/>
        <LangToggle class="top-menu__lang-toggle"/>
      </nav>
  </article>
</template>

<script lang="tsx" setup>
import ThemeToggle from '~/components/ThemeToggle/ThemeToggle.vue';
import LangToggle from '~/components/LangToggle/LangToggle.vue';
import { computed } from 'vue';
import { itemData, MenuItem } from './menu-data';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const items = computed(() => itemData[locale.value as 'en' | 'ru']);

function getMenuItemTitle(item: MenuItem): string {
  return item.title[0].toUpperCase() + item.title.slice(1);
}
</script>

<style lang="scss" scoped>
.top-menu {
  display: none;
  @include md-screen {
    display: block;
    width: max-content;
    &__wrapper {
      background-color: var(--boulders-0);
      box-shadow: -10px 0px 30px -15px var(--bays-4-07);
    }
    &__theme-toggle {
      width: 60px;
      margin-left: var(--s-sm);
      transform: translateY(2px);
    }
    &__lang-toggle {
      margin-left: var(--s-sm);
    }
    &__wrapper {
      width: min(75vw, 400px);
    }
  }
}

.navigation {
  display: flex;
  align-items: center;
  &-list {
    display: flex;
    list-style: none;
    &__item {
      margin-left: var(--s-sm);
      text-align: center;
      counter-increment: item 1;
      font-size: clamp(var(--fz-md), 0.8786rem + 0.5178vw, var(--fz-h-xs));
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
          text-align: center;
          color: var(--primary-color);
        }
      }
    }
  }
}


.dark {
  .top-menu {
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