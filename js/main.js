// object author

const AVATAR = 'img/avatars/user01.png, img/avatars/user02.png, img/avatars/user03.png, img/avatars/user04.png, img/avatars/user05.png, img/avatars/user06.png, img/avatars/user07.png, img/avatars/user08.png';

// object offer

const TITLE = 'Аппартаменты на любой вкус!';
const ADDRESS = '{{location.x}}, {{location.y}}';
const PRICE; //Любое положительное число.
const TYPE = 'palace, flat, house, bungalow';
const ROOMS; //Любое положительное число.
const GUESTS; //Любое положительное число.
const CHECKIN = '12:00, 13:00, 14:00';
const CHECKOUT = '12:00, 13:00, 14:00';
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'В каждом номере бар';
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


// object location

const X; //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
const Y; //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Дополнительное объяснение метода https://askdev.ru/q/generaciya-sluchaynyh-celyh-chisel-v-javascript-v-opredelennom-diapazone-296/

function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    alert('Отрицательное число в диапозоне. Замените на положительное.');
    return;
  }
  if (min > max || min === max) {
    alert('Поменяйте значения в диапазоне от минимального к максимальному и не равномому друг другу!');
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Объяснение метода toFixed: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

function getRandomNumberWithComma(min, max, numberAfterComma) {
  if (min < 0 || max < 0) {
    alert('Отрицательное число в диапозоне. Замените на положительное.');
    return;
  }
  if (min > max || min === max) {
    alert('Поменяйте значения в диапазоне от минимального к максимальному и не равномому друг другу!');
    return;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(numberAfterComma);
}
