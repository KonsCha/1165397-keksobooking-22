import {ADVERTISEMENT_NUMBER, createAdvertisement} from './data.js';

const allAdvertisements = new Array(ADVERTISEMENT_NUMBER).fill().map(() => createAdvertisement());
// console.log(allAdvertisements);
