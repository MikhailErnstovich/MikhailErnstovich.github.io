<template>
  <div id="map"></div>
</template>
<script setup lang="tsx">
import { onBeforeMount, onMounted } from 'vue';
let mapApiKey = '';
onBeforeMount(async () => {
  await fetch('/config.json').then(res => res.json()).then(d => mapApiKey = d.mapApiKey);
});
onMounted(async () => {
  //install Yandex map scripts
  let scriptYandexMap = document.createElement('script');
    scriptYandexMap.setAttribute('src', `https://api-maps.yandex.ru/2.1/?apikey=${mapApiKey}&lang=ru_RU`);
    scriptYandexMap.setAttribute('type', 'text/javascript');
    document.head.appendChild(scriptYandexMap);
  //initialize Yandex map
  scriptYandexMap.addEventListener('load', () => {
      ymaps.ready(() => {
        //map settings
        const settings = {
          //card center
          center: [55.76, 37.64],
          // 0 (whole world) < zoom < 19
          zoom: 7,
        }
        //create map
        const map = new ymaps.Map('map', settings);
      });
    });
  });

</script>
<style lang="scss">
  #map {
    width: 100%;
    height: 70vh;
  }
</style>