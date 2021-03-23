//  Cоблюдай порядок:
//  Импорты
//  Константы
//  Объявления функций
//  Выполнение алгоритмов
//  Экспорты

import {sendData} from './server-data.js';
import {renderToMap, resetMainMarker, setAddress} from './map.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS_NUMBER = 100;

const formMain = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
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
  return '';
}

const checkAmount = () => {
  const rooms = roomNumber.value;
  const capacityAmount = capacity.value;

  if (rooms === MAX_ROOMS_NUMBER && capacityAmount !== '0') {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (rooms < capacityAmount) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
  }
}

const deactivateState = () => {
  formMain.classList.add('ad-form--disabled');

  document.querySelectorAll('.ad-form input, .ad-form select, .ad-form textarea').forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });


  mapFilters.classList.add('map__filters--disabled');

  document.querySelectorAll('.map__filters input, .map__filters select').forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activateState = () => {
  formMain.classList.remove('ad-form--disabled');

  document.querySelectorAll('.ad-form input, .ad-form select, .ad-form textarea').forEach((element) => {
    element.removeAttribute('disabled');
  });


  mapFilters.classList.remove('map__filters--disabled');

  document.querySelectorAll('.map__filters input, .map__filters select').forEach((element) => {
    element.removeAttribute('disabled');
  });
}

const resetForm = (advertisement) => {
  formMain.reset();
  mapFilters.reset();
  renderToMap(advertisement);
  resetMainMarker();
  setAddress();
}

const setUserFormSubmit = () => {
  formMain.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        resetForm();
      },
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const setFormReset = () => {
  const resetButton = formMain.querySelector('.ad-form__reset');

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
  })
};

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


export {deactivateState, activateState, setUserFormSubmit, setFormReset, formMain, mapFilters};
