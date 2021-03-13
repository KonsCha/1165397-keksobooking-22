import {isEscEvent} from './utils.js';

//Находим шаблон сообщения success

const successTemplate = document.querySelector('#success').content.querySelector('.success');

//Находим шаблон сообщения error

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

//Закрытие сообщения через Esc

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

//Закрытие сообщения по клику на пустое место

const onClick = (evt) => {
  evt.preventDefault();
  closeMessage();
};

const closeMessage = () => {
  document.querySelectorAll('.success, .error').forEach((message) => message.remove());
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const showMessage = (message) => {
  document.body.appendChild(message);
  message.classList.remove('hidden');
  message.style.zIndex = '9999999';
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  showMessage(successMessage);
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  showMessage(errorMessage);
};

export {showSuccessMessage, showErrorMessage};
