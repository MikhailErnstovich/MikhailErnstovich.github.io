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
    scriptYandexMap.setAttribute('src', `https://api-maps.yandex.ru/2.1/?apikey=${mapApiKey}&lang=en_US`);
    scriptYandexMap.setAttribute('type', 'text/javascript');
    document.head.appendChild(scriptYandexMap);
  //initialize Yandex map
  scriptYandexMap.addEventListener('load', () => {
      ymaps.ready(() => {
        //map settings
        const settings = {
          //card center
          center: [55.991892, 37.214385],
          // 0 (whole world) < zoom < 19
          zoom: 4,
        }
        //create map
        const map = new ymaps.Map('map', settings);
        map.controls.remove('geolocationControl');
        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('rulerControl');

        const myPlacemark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.991892, 37.214385]
            }
        });

        map.geoObjects.add(myPlacemark); 
      });
    });
  });

</script>
<style lang="scss" scoped>
  #map {
    width: 100%;
    height: 70vh;
  }
</style>