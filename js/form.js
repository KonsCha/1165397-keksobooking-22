const formMain = document.querySelector('.ad-form');
const formInteractiveInput = document.querySelectorAll('.ad-form fieldset input');
const formInteractiveSelect = document.querySelectorAll('.ad-form fieldset select');
const formInteractiveTextArea = document.querySelectorAll('.ad-form fieldset textarea');
const mapFilters = document.querySelector('.map__filters');
const mapFilterInput = document.querySelectorAll('.map__filters fieldset input');
const mapFilterSelect = document.querySelectorAll('.map__filters select');
const address = formMain.querySelector('address');

const inactiveState = () => {
  formMain.classList.add('ad-form--disabled');

  formInteractiveInput.forEach((input) => {
    input.setAttribute('disabled', 'disabled');
  });

  formInteractiveSelect.forEach((select) => {
    select.setAttribute('disabled', 'disabled');
  });

  formInteractiveTextArea.forEach((textarea) => {
    textarea.setAttribute('disabled', 'disabled');
  });


  mapFilters.classList.add('map__filters--disabled');

  mapFilterInput.forEach((input) => {
    input.setAttribute('disabled', 'disabled');
  });

  mapFilterSelect.forEach((select) => {
    select.setAttribute('disabled', 'disabled');
  });
};

inactiveState();

const activeState = () => {
  formMain.classList.remove('ad-form--disabled');

  formInteractiveInput.forEach((input) => {
    input.removeAttribute('disabled');
  });

  formInteractiveSelect.forEach((select) => {
    select.removeAttribute('disabled');
  });

  formInteractiveTextArea.forEach((textarea) => {
    textarea.removeAttribute('disabled');
  });


  mapFilters.classList.remove('map__filters--disabled');

  mapFilterInput.forEach((input) => {
    input.removeAttribute('disabled');
  });

  mapFilterSelect.forEach((select) => {
    select.removeAttribute('disabled');
  });
}

export {inactiveState, activeState, address};
