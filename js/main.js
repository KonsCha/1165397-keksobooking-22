// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Дополнительное объяснение метода https://askdev.ru/q/generaciya-sluchaynyh-celyh-chisel-v-javascript-v-opredelennom-diapazone-296/

function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    alert('Отрицательное число в диапозоне. Замените на положительное.');
  }
  if (min > max || min === max) {
    alert('Поменяйте значения в диапазоне от минимального к максимальному и не равномому друг другу!');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Объяснение метода toFixed: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

function getRandomNumberWithComma(min, max, numberAfterComma) {
  if (min < 0 || max < 0) {
    alert('Отрицательное число в диапозоне. Замените на положительное.');
  }
  if (min > max || min === max) {
    alert('Поменяйте значения в диапазоне от минимального к максимальному и не равномому друг другу!');
  }
  return (Math.random() * (max - min + 1) + min).toFixed(numberAfterComma);
}

alert(getRandomNumber(0, 10));
alert(getRandomNumberWithComma(0, 10, 7));
