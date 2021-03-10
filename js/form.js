import {sendData} from './server-data.js';
import {adForm} from './map.js';

const formMain = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const address = formMain.querySelector('address');

const deactiveState = () => {
  formMain.classList.add('ad-form--disabled');

  document.querySelectorAll('.ad-form input, .ad-form select, .ad-form textarea').forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });


  mapFilters.classList.add('map__filters--disabled');

  document.querySelectorAll('.map__filters input, .map__filters select').forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activeState = () => {
  formMain.classList.remove('ad-form--disabled');

  document.querySelectorAll('.ad-form input, .ad-form select, .ad-form textarea').forEach((element) => {
    element.removeAttribute('disabled');
  });


  mapFilters.classList.remove('map__filters--disabled');

  document.querySelectorAll('.map__filters input, .map__filters select').forEach((element) => {
    element.removeAttribute('disabled');
  });
}

const setUserFormSubmit = () => {
  formMain.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};

const resetForm = () => {
  const resetButton = formElement.querySelector('.ad-form__reset');

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    adForm.reset();
    mapFilters.reset();
  })
};


export {deactiveState, activeState, address, setUserFormSubmit};
