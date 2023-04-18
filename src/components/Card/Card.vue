<template>
  <article class="card">
    <hgroup class="card__title-wrapper">
      <transition mode="out-in">
        <h3 class="card__title" :key="props.cardData.interval">{{ props.cardData.title }}</h3>
      </transition>
      <transition mode="out-in">
        <a 
          class="link card__link"
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
  border-radius: clamp(0.5rem, 0.266rem + 0.997vw, 1.5rem);
  padding: clamp(1rem, 0.766rem + 0.997vw, 2rem);
  &__title {
    font-size: clamp(1.125rem, 0.921rem + 0.872vw, 2rem);
    line-height: clamp(1.75rem, 1.575rem + 0.748vw, 2.5rem);
    font-family: var(--font-medium);
    letter-spacing: 1px;
  }
  &__link {
    font-size: clamp(1rem, 0.883rem + 0.498vw, 1.5rem);
    line-height: clamp(1.5rem, 1.383rem + 0.498vw, 2rem);
    font-family: var(--font-medium);
  }
  &__title-wrapper {
    margin-bottom: clamp(0.5rem, 0.442rem + 0.249vw, 0.75rem);
  }
  &__list {
    li {
      position: relative;
      font-size: clamp(1rem, 0.8786rem + 0.5178vw, 1.5rem);
      line-height: clamp(1.5rem, 1.383rem + 0.498vw, 2rem);
      margin-bottom: clamp(0.5rem, 0.442rem + 0.249vw, 0.75rem);
      padding-left: clamp(1.5rem, 1.383rem + 0.498vw, 2rem);
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