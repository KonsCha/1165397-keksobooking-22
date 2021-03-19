//  Cоблюдай порядок:
//  Импорты
//  Константы
//  Объявления функций
//  Выполнение алгоритмов
//  Экспорты

import {activateState, formMain} from './form.js';
import {createCard} from './card.js';

const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.692;
const MAIN_ZOOM = 8;

const address = formMain.querySelector('#address');

const map = window.L.map('map-canvas');

const createMarker = (lat, lng, draggable, icon) => {
  return window.L.marker({
    lat,
    lng,
  },
  {
    draggable,
    icon,
  })
}

const createPin = (lat, lng) => {
  return createMarker(lat, lng, false, window.L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }));
}

const createMainPin = (lat, lng) => {
  return createMarker(lat, lng, true, window.L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
  }));
}

const initMap = () => {
  map.on('load', () => {
    activateState();
    address.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  })
    .setView({
      lat: TOKYO_LAT,
      lng: TOKYO_LNG,
    }, MAIN_ZOOM);
  window.L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  redPin.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)},
    ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  redPin.addTo(map);
}

const resetMainMarker = () => {
  redPin.setLatLng([TOKYO_LAT, TOKYO_LNG])
  map.setView(new window.L.LatLng(TOKYO_LAT, TOKYO_LNG), MAIN_ZOOM);
};

const setAddress = () => {
  address.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
};

const redPin = createMainPin(TOKYO_LAT, TOKYO_LNG);

let pinList = [];

const removeMarkers = () => {
  pinList.length = 0;
  // или pinList = [];
}

// размещает маркеры предложений на карту
const  renderToMap = (allAdvertisements) => {

  allAdvertisements.slice(0, 10).forEach((advertisement) => {
    createPin(advertisement.location.lat, advertisement.location.lng).addTo(map).bindPopup(() => createCard(advertisement));
    pinList.push(createPin);
  });
}

// перерисовывает маркеры после удаления
const reRenderMarkers = (allAdvertisements) => {
  removeMarkers();
  renderToMap(allAdvertisements);
}

export {initMap, resetMainMarker, setAddress, reRenderMarkers, renderToMap};
