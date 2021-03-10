const ALERT_SHOW_TIME = 5000;

//  Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Дополнительное объяснение метода https://askdev.ru/q/generaciya-sluchaynyh-celyh-chisel-v-javascript-v-opredelennom-diapazone-296/
//  Функция получения случайного числа

const getRandomNumber = (min, max) => {
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

const getRandomNumberWithComma = (min, max, numberAfterComma) => {
  if (min < 0 || max < 0) {
    return;
  }
  if (min > max || min === max) {
    return;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(numberAfterComma);
}


//  Функция получения случайного элемента из массива строк

const getRandomElementFromArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

export {getRandomNumber, getRandomNumberWithComma, getRandomElementFromArray};

// Дизайн блока с сообщением об ошибке

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {showAlert};
