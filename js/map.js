import {inactiveState, activeState, address} from './form.js';
import {xRandomLocation, yRandomLocation} from './data.js';
import {createCard} from './card.js';

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
    activeState();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 8);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [46, 46],
  iconAnchor: [23, 46],
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  const markerTip = {xAddressValue: evt.target.getLatLng().lat,
    yAddressValue: evt.target.getLatLng().lng};
    return markerTip;
});

const createBindPopupCard = (markerTip) => {
  const exampleCard = createCard(allAdvertisements[0]);
  exampleCard.querySelector('.popup__text--address').textContent = `Координаты: ${markerTip.x}, ${markerTip.y}`;

  return popupElement;
}

const usualPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const usualMarker = L.marker(
  {
    lat: xRandomLocation,
    lng: yRandomLocation,
  },
  {
    draggable: true,
    icon: usualPinIcon,
  },
);

usualMarker.addTo(map);

marker
.addTo(map)
.bindPopup(createBindPopupCard(markerTip),)
;
