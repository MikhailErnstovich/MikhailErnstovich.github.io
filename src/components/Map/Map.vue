<template>
  <div id="map-wrapper" @click="mapHandler" ref="wrapper">
    <div id="map" v-if="toggleMap"></div>
    <a id="map-toggle" @click="$emit('geoPermission')" v-else>Show map</a>
  </div>
</template>
<script setup lang="tsx">
import { insertMap } from '~/helpers/lazy-loaders';
import { MapPositions } from '~/types';
import { ref, watch } from 'vue';

const props = defineProps<{
  positions: MapPositions,
  geoPermission: boolean
}>();

const toggleMap = ref(false);
const mapHandler = (e: MouseEvent) => {
  if (!toggleMap.value) {
    toggleMap.value = true;
    insertMap(e.currentTarget as HTMLElement, props.positions, createMap)
  }
}

let map = null;
const wrapper = ref();
watch(() => props.geoPermission, () => {
  if (map) {
    map?.destroy();
    insertMap(wrapper.value, props.positions, createMap);
  }
});

async function createMap(positions: MapPositions) {
  fetch('/config.json')
    .then(res => res.json())
    .then(d => {
      //install Yandex map scripts
      let scriptYandexMap = document.createElement('script');
      scriptYandexMap.setAttribute('src', `https://api-maps.yandex.ru/2.1/?apikey=${d.mapApiKey}&lang=en_US`);
      scriptYandexMap.setAttribute('type', 'text/javascript');
      document.head.appendChild(scriptYandexMap);
      //initialize Yandex map
      scriptYandexMap.addEventListener('load', () => {
        ymaps.ready(() => {
          //map settings
          const settings = {
            //card center
            center: positions.myPosition,
            // 0 (whole world) < zoom < 19
            zoom: 4,
          }
          //create map
          map = new ymaps.Map('map', settings);
          map.controls.remove('geolocationControl');
          map.controls.remove('searchControl');
          map.controls.remove('trafficControl');
          map.controls.remove('typeSelector');
          map.controls.remove('rulerControl');

          const myPlacemark = new ymaps.GeoObject(
            {
              geometry: {
                type: "Point",
                coordinates: positions.myPosition,
              },
              properties: {
                iconContent: 'Mikhail M'
              },
            },
            {
              preset: 'islands#darkBlueStretchyIcon',
            }
          );
          if (positions.userPosition[0] || positions.userPosition[1]) {
            const userPosition = new ymaps.GeoObject(
              {
                geometry: {
                  type: "Point",
                  coordinates: positions.userPosition,
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
                    positions.myPosition,
                    positions.userPosition
                  ]
                },
                properties: {
                  balloonContent: ''
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
    });
}

</script>
<style lang="scss" scoped>
#map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;

  #map {
    width: 100%;
    height: 100%;
  }

  @include md-screen {
    aspect-ratio: 16 / 9;
  }
  #map-toggle {
    display: flex;
    flex-direction: row;
    width: max-content;
    padding: clamp(1rem, 0.939rem + 0.259vw, 1.25rem) clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
    border-radius: 100px;
    background-color: var(--bays-1);
    font-size: clamp(0.875rem, 0.814rem + 0.259vw, 1.125rem);
    line-height: clamp(1.25rem, 1.068rem + 0.777vw, 2rem);
    text-transform: uppercase;
    color: #ffffff;
    transition: background-color 0.25s cubic-bezier(0.645,0.045,0.355,1);
    cursor: pointer;
    user-select: none;
    &:hover,
    &:focus {
      background-color: var(--primary-color);
    }
    &:active {
      background-color: var(--bays-3);
    }
  }
}
</style>