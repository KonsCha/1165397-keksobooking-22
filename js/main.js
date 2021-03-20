import './map.js';
import './server-data.js';
import './filter.js';
import {getData} from './server-data.js';
import {initMap, renderToMap} from './map.js';
import {deactivateState, setUserFormSubmit, setFormReset} from './form.js';
import {showAlert} from './utils.js';
import './utils.js';
import {addFilterListener} from './filter.js';

deactivateState();
getData((advertisement) => {
  initMap(advertisement);
  addFilterListener(advertisement);
  renderToMap(advertisement);
},
() => {
  showAlert('Не удалось загрузить данные');
},
);

setUserFormSubmit();
setFormReset();
