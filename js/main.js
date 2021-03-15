import './map.js';
import './server-data.js';
import './filter.js';
import {getData} from './server-data.js';
import {initMap} from './map.js';
import {deactivateState, setUserFormSubmit, setFormReset} from './form.js';
import {showAlert} from './utils.js';
import './utils.js';

deactivateState();
getData((advertisement) => {
  initMap(advertisement)
},
() => {
  showAlert('Не удалось загрузить данные');
},
);

setUserFormSubmit();
setFormReset();
