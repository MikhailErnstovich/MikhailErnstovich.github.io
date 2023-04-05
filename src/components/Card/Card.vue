<template>
  <article class="card">
    <hgroup class="card__title-wrapper">
      <transition mode="out-in">
        <h3 class="card__title" :key="props.cardData.interval">{{ props.cardData.title }}</h3>
      </transition>
      <transition mode="out-in">
        <a 
          class="link card_link"
          target="_blank"
          :href="props.cardData.link"
          :key="props.cardData.interval"
        >
          {{ props.cardData.organization }} 
        </a>
      </transition>
    </hgroup>
    <transition mode="out-in">
      <ul class="card__list" :key="props.cardData.interval">
        <li v-for="activity in props.cardData.activities">{{ activity }}</li>
      </ul>   
    </transition>
  </article>
</template>

<script setup lang="tsx">
import { TimelineEvent } from '../Timeline/timeline-data';

const props = defineProps<{
  cardData: TimelineEvent 
}>();

</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(45deg, var(--bays-0-01), var(--bays-0-02));
  border: none;
  border-radius: var(--s-xss);
  padding: var(--s-xs);
  &__title {
    font-size: var(--fz-lg);
    font-family: var(--font-medium);
    letter-spacing: 1px;
  }
  &__link {
    font-size: var(--fz-md);
    font-family: var(--font-medium);
  }
  &__list {
    margin-top: var(--s-xss);
    li {
      position: relative;
      font-size: var(--fz-md);
      margin-bottom: var(--s-xss);
      padding-left: var(--s-sm);
      list-style: none;
      &::before {
        display: block;
        content: '▸';
        position: absolute;
        left: 0;
        height: inherit;
        line-height: inherit;
        color: var(--primary-color);
      }
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.645,0.045,0.355,1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dark {
  .card__list {
    li {
      &::before {
        color: var(--boulders-0);
      }
    }
  }
}

</style>