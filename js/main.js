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
  'У нас печеньки!'
];
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow'
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const DESCRIPTION = [
  'В каждом номере бар',
  'Душ с горячей водой',
  'Номер для не курящих',
  'Джакузи в номере'
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

//  object location

//  число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
//  число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ADVERTISEMENT_NUMBER = 10;

//  Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Дополнительное объяснение метода https://askdev.ru/q/generaciya-sluchaynyh-celyh-chisel-v-javascript-v-opredelennom-diapazone-296/
//  Функция получения случайного числа

function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return;
  }
  if (min > max || min === max) {
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//  Объяснение метода toFixed: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//  Функция получения случайного числа с плавающей точкой

function getRandomNumberWithComma(min, max, numberAfterComma) {
  if (min < 0 || max < 0) {
    return;
  }
  if (min > max || min === max) {
    return;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(numberAfterComma);
}


//  Функция получения случайного элемента из массива строк

function getRandomElementFromArray(array) {
  return array[getRandomNumber(0, array.length - 1)];
}


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

//  console.log(allAdvertisements);
