import {getRandomNumber, getRandomNumberWithComma, getRandomElementFromArray} from './utils.js';

//  object author

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];

//  object offer

const TITLE = [
  'Аппартаменты на любой вкус!',
  'Вам понравится!',
  'Бронируйте, не пожалеете!',
  'У нас печеньки!',
];
const TYPE = [
  {'palace': 'Дворец'},
  {'flat': 'Квартира'},
  {'house': 'Дом'},
  {'bungalow': 'Бунгало'},
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'В каждом номере бар',
  'Душ с горячей водой',
  'Номер для некурящих',
  'Джакузи в номере',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

//  object location

//  число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
//  число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ADVERTISEMENT_NUMBER = 10;

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

export {ADVERTISEMENT_NUMBER, createAdvertisement};
