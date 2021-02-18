import {ADVERTISEMENT_NUMBER, createAdvertisement} from './data.js';
import {createCard} from './card.js';

const allAdvertisements = new Array(ADVERTISEMENT_NUMBER).fill().map(() => createAdvertisement());
// console.log(allAdvertisements);

const exampleCard = createCard(createAdvertisement);

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(exampleCard);
