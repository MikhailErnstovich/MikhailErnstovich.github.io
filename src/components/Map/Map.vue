<template>
  <div id="map"></div>
</template>
<script setup lang="tsx">
import { onBeforeMount, ref, watch } from 'vue';
import { MapPositions } from '~/Types';

const props = defineProps<{
  positions: MapPositions,
  toggleMap: boolean
}>();

const mapApiKey = ref('');

onBeforeMount(async () => {
  await fetch('/config.json')
    .then(res => res.json())
    .then(d => mapApiKey.value = d.mapApiKey);
});

watch(() => props.toggleMap, () => createMap());

const createMap = async () => {
  //install Yandex map scripts
  let scriptYandexMap = document.createElement('script');
      scriptYandexMap.setAttribute('src', `https://api-maps.yandex.ru/2.1/?apikey=${mapApiKey.value}&lang=en_US`);
      scriptYandexMap.setAttribute('type', 'text/javascript');
      document.head.appendChild(scriptYandexMap);
  //initialize Yandex map
  scriptYandexMap.addEventListener('load', () => {
    ymaps.ready(() => {
      //map settings
      const settings = {
        //card center
        center: props.positions.myPosition,
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
            coordinates: props.positions.myPosition,
          },
          properties: {
            iconContent: 'Mikhail M'
          },
        },
        {
          preset: 'islands#darkBlueStretchyIcon',
        }
      );
      if (props.positions.userPosition[0] || props.positions.userPosition[1]) {
        const userPosition = new ymaps.GeoObject(
          {
            geometry: {
              type: "Point",
              coordinates: props.positions.userPosition,
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
                props.positions.myPosition,
                props.positions.userPosition
              ]
            },
            properties: {
              balloonContent: '123'
            }
          },
          {
            // lines are displayed as geodesic curves
            geodesic: true,
            // line stroke width
            strokeWidth: 3,
            // line color
            strokeColor: "#0062f5"
          }
        );
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
      } else {
        map.geoObjects.add(myPlacemark) 
      }
    });
  });
}
</script>
<style lang="scss" scoped>
  #map {
    width: 100%;
    aspect-ratio: 1 / 1;
    @include md-screen {
      aspect-ratio: 16 / 9;
    }
  }
</style>