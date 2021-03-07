import './map.js';
import './server-data.js';
import './filter.js';
import {createFetch} from './server-data.js';
// console.log(allAdvertisements);
// const exampleCard = createCard(allAdvertisements[0]);
// const mapCanvas = document.querySelector('#map-canvas');
// mapCanvas.appendChild(exampleCard);

const fetchAnimals = createFetch(
  (animals) => {
      console.log(animals);
  },
  (err) => {
      console.log(err);
  });

fetchAnimals();
