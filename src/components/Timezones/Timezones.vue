<template>
  <article
    v-appear-transition
    class="timezones animation animation_opacity animation_drop start"
  >
    <p v-if="timeDifference > 0" class="timezones__difference">
      <span class="timezones__text-1"> {{ $t('timezones.text-1') }} </span>
      <time :datetime="timeDifference + 'h'">
        {{ Math.abs(timeDifference) + $t('timezones.hour') }}
      </time>
      <span class="timezones__text-2"> {{ $t('timezones.text-2') }} </span>
    </p>
    <p v-else-if="timeDifference < 0" class="timezones__difference">
      <span class="timezones__text-1"> {{ $t('timezones.text-1') }} </span>
      <time :datetime="Math.abs(timeDifference) + 'h'">
        {{ Math.abs(timeDifference) + $t('timezones.hour') }}
      </time>
      <span class="timezones__text-3"> {{ $t('timezones.text-3') }} </span>
    </p>
    <p v-else class="timezones__difference timezones__text-4">
      {{ $t('timezones.text-4') }}
    </p>
    <div class="timezones__clock">
      <p
        v-if="timeDifference !== 0"
        class="timezones__clock-name timezones__text-5"
      >
        {{ $t('timezones.text-5') }}
      </p>
      <time :datetime="userDatetime" class="timezones__clock-data">
        {{ userClock }}
      </time>
    </div>
    <div v-if="timeDifference !== 0" class="timezones__clock">
      <p class="timezones__clock-name timezones__text-6">
        {{ $t('timezones.text-6') }}
      </p>
      <time :datetime="myDatetime" class="timezones__clock-data">
        {{ myClock }}
      </time>
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
    .then((res) => res.json())
    .then((d) => (myOffset.value = +d.myUTCOffset * 60 * 60000));
});

const date = ref(new Date());

const userClock = computed(() => {
  const d = new Date(
    date.value.getTime() - date.value.getTimezoneOffset() * 60000,
  );
  return dateFormatter(d);
});
const userDatetime = computed(() => {
  const d = new Date(
    date.value.getTime() - date.value.getTimezoneOffset() * 60000,
  );
  return datetimeFormatter(d);
});

const myClock = computed(() => {
  const d = new Date(date.value.getTime() - myOffset.value);
  return dateFormatter(d);
});
const myDatetime = computed(() => {
  const d = new Date(date.value.getTime() - myOffset.value);
  return datetimeFormatter(d);
});

const timeDifference = computed((): number => {
  const userTime = new Date(
    date.value.getTime() - date.value.getTimezoneOffset() * 60000,
  ).getTime();
  const myTime = new Date(date.value.getTime() - myOffset.value).getTime();
  return Math.round((userTime - myTime) / 3600000);
});

const dateFormatter = (d: Date): string => {
  const hours = toTwoDigitFormat(d.getUTCHours());
  const minutes = toTwoDigitFormat(d.getUTCMinutes());
  const seconds = toTwoDigitFormat(d.getUTCSeconds());
  const day = toTwoDigitFormat(d.getUTCDate());
  const month = toTwoDigitFormat(d.getUTCMonth() + 1);
  const year = d.getUTCFullYear();
  return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
};

const datetimeFormatter = (d: Date): string => {
  const hours = toTwoDigitFormat(d.getUTCHours());
  const minutes = toTwoDigitFormat(d.getUTCMinutes());
  const day = toTwoDigitFormat(d.getUTCDate());
  const month = toTwoDigitFormat(d.getUTCMonth() + 1);
  const year = d.getUTCFullYear();
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const toTwoDigitFormat = (num: number): string => {
  const str = num.toString();
  return str.length === 1 ? `0${str}` : str;
};

onMounted(() => clocks());

const clocks = () => {
  setTimeout(() => {
    date.value = new Date();
    clocks();
  }, 1000);
};
</script>
<style lang="scss" scoped>
.timezones {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__difference {
    width: 100%;
    font-family: var(--font-light);
  }
  &__clock {
    &-data {
      font-family: 'Courier New', Courier, monospace;
      font-weight: 100;
      font-size: var(--fz-xs);
    }
    &-name {
      font-family: var(--font-light);
    }
  }
  time {
    font-family: monospace;
  }
  @include md-screen {
    &__clock:nth-child(3) {
      order: 3;
      text-align: right;
    }
    &__clock:nth-child(2) {
      order: 1;
    }
    &__difference {
      width: auto;
      order: 2;
    }
  }
}
</style>
