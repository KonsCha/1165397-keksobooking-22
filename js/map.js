import {inactiveState, activeState, address} from './form.js';
import {xRandomLocation, yRandomLocation} from './data.js';
import {createCard} from './card.js';
import {allAdvertisements} from './main.js';

const map = window.L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
    activeState();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 8);
window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// const mainPinIcon = window.L.icon({
//   iconUrl: 'img/main-pin.svg',
//   iconSize: [46, 46],
//   iconAnchor: [23, 46],
// });


// const marker = window.L.marker(
//   {
//     lat: 35.6895,
//     lng: 139.692,
//   },
//   {
//     draggable: true,
//     icon: mainPinIcon,
//   },
// );

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


const createPin = (lon, lng) => {
  return createMarker(lon, lng, window.L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  ));
}

const createMainPin = (lon, lng) => {
  return createMarker(lon, lng, window.L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
  }));
}

const redPin = createMainPin (35.6895, 139.692);
const bluePin = createPin (xRandomLocation, yRandomLocation);

redPin.on('moveend', (evt) => {
  const markerTip = {xAddressValue: evt.target.getLatLng().lat,
    yAddressValue: evt.target.getLatLng().lng};
  return markerTip;
});

const createBindPopupCard = (markerTip) => {
  const exampleCard = createCard(allAdvertisements[0]);
  exampleCard.querySelector('.popup__text--address').textContent = `Координаты: ${markerTip.x}, ${markerTip.y}`;
  return exampleCard;
}


// const usualPinIcon = window.L.icon({
//   iconUrl: 'img/pin.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });


// const usualMarker = window.L.marker(
//   {
//     lat: xRandomLocation,
//     lng: yRandomLocation,
//   },
//   {
//     draggable: true,
//     icon: usualPinIcon,
//   },
// );


// usualMarker.addTo(map);

redPin
  .addTo(map)
  .bindPopup(createBindPopupCard);

bluePin
  .addTo(map)
  .bindPopup(createBindPopupCard)
