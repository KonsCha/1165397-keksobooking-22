//  Cоблюдай порядок:
//  Импорты
//  Константы
//  Объявления функций
//  Выполнение алгоритмов
//  Экспорты

import {sendData} from './server-data.js';
import {adForm, resetMainMarker, setAddress} from './map.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const formMain = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const address = formMain.querySelector('#address');

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

const resetForm = () => {
  adForm.reset();
  mapFilters.reset();
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


export {deactivateState, activateState, address, setUserFormSubmit, setFormReset};
