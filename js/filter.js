import {formMain} from './form.js';

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS_NUMBER = 100;

const type = formMain.querySelector('#type');
const title = formMain.querySelector('#title');
const price = formMain.querySelector('#price');
const timeIn = formMain.querySelector('#timein');
const timeOut = formMain.querySelector('#timeout');
const roomNumber = formMain.querySelector('#room_number');
const capacity = formMain.querySelector('#capacity');

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

const checkAmount = () => {
  const rooms = parseInt(roomNumber.value, 10);
  const capacityAmount = parseInt(capacity.value, 10);

  if (rooms === MAX_ROOMS_NUMBER && capacityAmount !== '0') {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (rooms < capacityAmount) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
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

capacity.addEventListener('change', () => {
  checkAmount();
})

roomNumber.addEventListener('change', () => {
  checkAmount();
})
