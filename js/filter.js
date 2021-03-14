import {formMain} from './form.js';

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;
const MAX_PRICE = 1000000;

const type = formMain.querySelector('#type');
const title = formMain.querySelector('#title');
const price = formMain.querySelector('#price');
const timeIn = formMain.querySelector('#timein');
const timeOut = formMain.querySelector('#timeout');

const minPriceTypes = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const getAdTitle = (value) => {
  if (value < MIN_AD_LENGTH) {
    return 'Добавьте больше символов.';
  }
  if (value > MAX_AD_LENGTH) {
    return 'Удалите лишние символы.';
  }
  else {
    return '';
  }
}

type.addEventListener('change', () => {
  price.min = minPriceTypes[type.value];
  price.placeholder = minPriceTypes[type.value];
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

title.addEventListener('input', () => {
  title.setCustomValidity(getAdTitle(title.value.length));
  title.reportValidity();
});

price.addEventListener('input', () => {
  const priceValue = price.value;
  price.min = minPriceTypes[type.value];

  if (priceValue > MAX_PRICE) {
    price.setCustomValidity(`Цена не может быть больше чем ${MAX_PRICE}`);
  } else if (priceValue < price.min) {
    price.setCustomValidity(`Стоимость не должна быть меньше чем ${price.min}`);
  } else {
    price.setCustomValidity('');
  }
});
