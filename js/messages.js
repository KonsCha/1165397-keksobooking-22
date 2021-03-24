import {isEscEvent} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

const onClickToCloseMessage = (evt) => {
  evt.preventDefault();
  closeMessage();
};

const closeMessage = () => {
  document.querySelectorAll('.success, .error').forEach((message) => message.remove());
  document.removeEventListener('click', onClickToCloseMessage);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const showMessage = (message) => {
  message.classList.remove('hidden');
  message.style.zIndex = '9999999';
  document.addEventListener('click', onClickToCloseMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.body.appendChild(message);
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
