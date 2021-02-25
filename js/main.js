import {ADVERTISEMENT_NUMBER, createAdvertisement} from './data.js';
import {createCard} from './card.js';
import {inactiveState} from './form.js';
import './map.js';

const allAdvertisements = new Array(ADVERTISEMENT_NUMBER).fill().map(() => createAdvertisement());
// console.log(allAdvertisements);

// const exampleCard = createCard(allAdvertisements[0]);

// const mapCanvas = document.querySelector('#map-canvas');
// // mapCanvas.appendChild(exampleCard);

export {allAdvertisements};
