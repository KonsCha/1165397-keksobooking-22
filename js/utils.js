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

export {getRandomNumber, getRandomNumberWithComma, getRandomElementFromArray};
