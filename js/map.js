import {deactiveState, activeState} from './form.js';
import {createCard} from './card.js';
import {ADVERTISEMENT_NUMBER, createAdvertisement} from './data.js';

const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.692;

const adForm = document.querySelector('.ad-form');
const inputAddress = adForm.querySelector('#address');

const createMarker = (lat, lng, icon) => {
  return window.L.marker({
    lat,
    lng,
  },
  {
    draggable: true,
    icon,
  })
}

const createPin = (lat, lng) => {
  return createMarker(lat, lng, window.L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }));
}

const createMainPin = (lat, lng) => {
  return createMarker(lat, lng, window.L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
  }));
}

const initMap = (allAdvertisements) => {
  const map = window.L.map('map-canvas')
  .on('load', () => {
    activeState();
    inputAddress.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  })
  .setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, 8);
window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

  const redPin = createMainPin(TOKYO_LAT, TOKYO_LNG);

  redPin.on('moveend', (evt) => {
    inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)},
    ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  redPin.addTo(map);

  allAdvertisements.forEach((advertisement) => {
    const pin = createPin(advertisement.location.lat, advertisement.location.lng);
    pin.addTo(map);
    pin.bindPopup(() => createCard(advertisement));
  });
}
 export {initMap, adForm};
