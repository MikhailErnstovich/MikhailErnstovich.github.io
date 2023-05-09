<template>
  <article class="timezones animation animation_opacity animation_drop start" v-appear-transition>
    <div class="timezones__data" v-show="userData?.gmtOffset && userTime">
      <h4>You</h4>
      <div>{{ handlePrefix(userData?.gmtOffset) }}</div>
      <div> {{ userTime }}</div>
    </div>
    <div class="timezones__data" v-show="myData?.gmtOffset && myTime">
      <h4>Mikhail</h4>
      <div>{{ handlePrefix(myData?.gmtOffset) }}</div>
      <div> {{ myTime }}</div>
    </div>
    <div class="timezones__difference">
      <h4>Time difference: </h4>
      <div>{{ handleTimeDifference }}</div>
    </div>
  </article>
</template>
<script setup lang="tsx">
import { onBeforeMount, onMounted, ref, Ref, computed } from 'vue';
import { appearAnimation } from '~/helpers/appear-animation';
import { MapPositions, TimezoneResponse, TimeData, ConvertResponse, Position } from '~/Types';

const props = defineProps<{
  positions: MapPositions,
}>();

const vAppearTransition = {
  mounted: (el: HTMLElement) => appearAnimation(el, 'start'),
};
const timezoneApiKey = ref('');
const userData = ref<TimeData>({
  gmtOffset: 0,
  zoneName: ''
});
const myData = ref<TimeData>({
  gmtOffset: 0,
  zoneName: ''
});
const timeDifference = ref<number>()
const handleTimeDifference = computed(() => timeDifference.value?.toString() + ' hours');
const handlePrefix = (seconds: number):string => {
  const hours = Math.round(seconds / 3600);
  return hours < 0 ? `UTC${hours}` : `UTC+${hours}`;
};

//timezonedb.com free api provides suppurt of no more than 1 request per second
//therefore requestDelay function is applied
const requestDelay = async (callback:Function, args: any) => {
  await callback(...args);
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};
const fetchTimeData = async (apiKey: string, position: Position, storage: Ref<TimeData>) => {
  const URL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${[position[0]]}&lng=${position[1]}`;
  await fetch(URL)
    .then(res => res.json())
    .then((d:TimezoneResponse) => {
      storage.value = (({ gmtOffset, zoneName }) => ({ gmtOffset, zoneName }))(d);
    });
};
const fetchDifference = async (apiKey: string, zoneFrom: string, zoneTo: string, storage: Ref<number>) => {
  const URL = `http://api.timezonedb.com/v2.1/convert-time-zone?key=${apiKey}&format=json&from=${zoneFrom}&to=${zoneTo}`;
  await fetch(URL)
    .then(res => res.json())
    .then((d:ConvertResponse) => storage.value = Math.round(d.offset / 3600));
};
onBeforeMount(async () => {
  await fetch('/config.json')
    .then(res => res.json())
    .then(d => timezoneApiKey.value = d.timezoneApiKey);
  await fetchTimeData(timezoneApiKey.value, props.positions.myPosition, myData);
  await requestDelay(fetchTimeData, [timezoneApiKey.value, props.positions.userPosition, userData]);
  await requestDelay(fetchDifference, [timezoneApiKey.value, userData.value?.zoneName, myData.value?.zoneName, timeDifference]);
});

const calcTime = (offset:number) => {
  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  return new Date(localTime + localOffset + offset * 1000).toLocaleString();
};

const userTime = ref('');
const myTime = ref('');
const clocks = () => {
  setTimeout(() => {
    userTime.value = calcTime(userData.value?.gmtOffset);
    myTime.value = calcTime(myData.value?.gmtOffset);
    clocks();
  }, 1000)
}
onMounted(() => clocks());
</script>
<style lang="scss" scoped>
.timezones {
  &__data,
  &__difference {
    div {
      font-family: monospace;
    }
  }
}
</style>