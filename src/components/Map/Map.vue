<template>
  <div id="map"></div>
</template>
<script setup lang="tsx">
import { computed, onBeforeMount, onMounted, ref } from 'vue';

const position = ref<GeolocationPosition>();
const coords = computed(() => [position.value?.coords.latitude, position.value?.coords.longitude]);
const myPosition = [55.991892, 37.214385];

onMounted(() => {
  // fetch('http://worldtimeapi.org/api/timezone/').then(res => res.json()).then(d => console.log(d))
  const successCallback = (pos: GeolocationPosition) => {
    position.value = pos;
  };

  const errorCallback = (error: GeolocationPositionError) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

});

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

        const myPlacemark = new ymaps.GeoObject(
          {
            geometry: {
              type: "Point",
              coordinates: myPosition,
            },
            properties: {
              iconContent: 'Mikhail M'
            },
          },
          {
            preset: 'islands#darkBlueStretchyIcon',
          }
        );

        const userPosition = new ymaps.GeoObject(
          {
            geometry: {
              type: "Point",
              coordinates: coords.value,
            },
            properties: {
              iconContent: 'You',
            },
          }, 
          {
            preset: 'islands#redStretchyIcon',
          }
        );
        
        const myPolyline = new ymaps.GeoObject(
          {
            geometry: {
              type: "LineString",
              coordinates: [
                myPosition,
                coords.value
              ]
            },
            properties: {
              balloonContent: '123'
            }
          },
          {
            // Включение режима отображения в виде геодезических кривых.
            geodesic: true,
            // Установка ширины до 5 пикселей.
            strokeWidth: 3,
            // Установка цвета линии.
            strokeColor: "#0062f5"
          }
        );
        myPolyline.Balloon
       

        map.geoObjects
          .add(myPlacemark) 
          .add(userPosition)
          .add(myPolyline); 
        map.setBounds(
          map.geoObjects.getBounds(),
          {
            checkZoomRange: true,
            zoomMargin: 30,
          }
        );
      });
    });
  });

</script>
<style lang="scss" scoped>
  #map {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
</style>