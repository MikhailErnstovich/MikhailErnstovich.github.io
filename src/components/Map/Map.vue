<template>
  <div id="map" v-inserted></div>
</template>
<script setup lang="tsx">
import { insertMap } from '~/helpers/lazy-loaders';
import { MapPositions } from '~/types';

const props = defineProps<{
  positions: MapPositions,
  toggleMap: boolean
}>();

const vInserted = {
  updated: (el: HTMLElement) => insertMap(el, props.positions, createMap),
};

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
#map {
  width: 100%;
  aspect-ratio: 1 / 1;

  @include md-screen {
    aspect-ratio: 16 / 9;
  }
}
</style>