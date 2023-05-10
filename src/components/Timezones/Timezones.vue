<template>
  <article class="timezones animation animation_opacity animation_drop start" v-appear-transition>
    <div class="timezones__difference">
      <div>{{ timeDifference }}</div>
    </div>
    <div class="timezones__data">
      <div>Your clock:</div>
      <div class="timezones__clock">{{ userClock }}</div>
    </div>
    <div class="timezones__data">
      <div>Mikhail's clock:</div>
      <div class="timezones__clock">{{ myClock }}</div>
    </div>
  </article>
</template>
<script setup lang="tsx">
import { onMounted, ref, computed, onBeforeMount } from 'vue';
import { appearAnimation } from '~/helpers/appear-animation';

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
const myOffset = ref(0);
onBeforeMount(async () => {
  await fetch('/config.json')
    .then(res => res.json())
    .then(d => myOffset.value = +d.myUTCOffset * 60 * 60000);
})

const date = ref(new Date());

const userClock = computed(() => {
  const d = new Date(date.value.getTime() - date.value.getTimezoneOffset() * 60000);
  return dateFormatter(d);
});

const myClock = computed(() => {
  const d = new Date(date.value.getTime() - myOffset.value);
  return dateFormatter(d);
});

const timeDifference = computed(():string => {
  const userTime = new Date(date.value.getTime() - date.value.getTimezoneOffset() * 60000).getTime();
  const myTime = new Date(date.value.getTime() - myOffset.value).getTime();
  const difference = Math.round((userTime - myTime) / 3600000);
  if (difference > 0) {
    return `Your clock is ${Math.abs(difference)} hours ahead Mikhail's.`;
  } else if (difference < 0) {
    return `Your clock is ${Math.abs(difference)} hours behind Mikhail's.`;
  } else {
    return 'You are in the same time zone as Mikhail.';
  }
});

const dateFormatter = (d: Date):string => {
  const hours = toTwoDigitFormat(d.getUTCHours());
  const minutes = toTwoDigitFormat(d.getUTCMinutes());
  const seconds = toTwoDigitFormat(d.getUTCSeconds());
  const day = toTwoDigitFormat(d.getUTCDate());
  const month = toTwoDigitFormat(d.getUTCMonth() + 1);
  const year = d.getUTCFullYear(); 
  return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
}

const toTwoDigitFormat = (num: number):string => {
  const str = num.toString();
  return str.length === 1 ? `0${str}` : str;
};

onMounted(() => clocks());

const clocks = () => {
  setTimeout(() => {
    date.value = new Date();
    clocks();
  }, 1000)
};
</script>
<style lang="scss" scoped>
.timezones {
  &__clock {
    font-family: monospace;
  }
  @include md-screen {
    display: none;
  }
}
</style>