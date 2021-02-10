import {AVATAR, TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, ADVERTISEMENT_NUMBER} from './data.js';
import {getRandomNumber, getRandomNumberWithComma, getRandomElementFromArray} from './utils.js';

function createAdvertisement() {
  const xRandomLocation = getRandomNumberWithComma(35.65000, 35.70000, 5);
  const yRandomLocation = getRandomNumberWithComma(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: getRandomElementFromArray(AVATAR),
    },
    offer: {
      title: getRandomElementFromArray(TITLE),
      address: `${xRandomLocation}, ${yRandomLocation}`,
      price: getRandomNumber(5000, 20000),
      type: getRandomElementFromArray(TYPE),
      rooms: getRandomNumber(1, 4),
      guests: getRandomNumber(1, 10),
      checkin: getRandomElementFromArray(CHECKIN),
      checkout: getRandomElementFromArray(CHECKOUT),
      features: getRandomElementFromArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTION),
      photos: getRandomElementFromArray(PHOTOS),
    },
    location: {
      x: xRandomLocation,
      y: yRandomLocation,
    },
  }
}

const allAdvertisements = new Array(ADVERTISEMENT_NUMBER).fill().map(() => createAdvertisement());

export {allAdvertisements};
