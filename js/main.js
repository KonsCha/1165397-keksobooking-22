import './map.js';
import './server-data.js';
import './filter.js';
import {getData, sendData} from './server-data.js';
import {initMap} from './map.js';
import {deactiveState, activeState, setUserFormSubmit} from './form.js';
import {showAlert} from './utils.js';
import './utils.js';

deactiveState();
getData((advertisement) => {
  initMap(advertisement),
  () => {
    showAlert('Не удалось загрузить данные');
  }
});

setUserFormSubmit();
