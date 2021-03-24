import {mapFilters} from './form.js';
import {reRenderMarkers} from './map.js';
import {debounce} from './utils.js';

const MAX_NUMBER_OF_PINS = 10;
const DEBOUNCE_TIME = 500;

const PriceRange = {
  low: {
    MIN: 0,
    MAX: 10000,
  },
  middle: {
    MIN: 10000,
    MAX: 50000,
  },
  high: {
    MIN: 50000,
    MAX: Infinity,
  },
};

const selects = mapFilters.querySelectorAll('select');

const checkPrice = (value, range) => {
  const settings = PriceRange[value];
  if (settings) {
    return range >= settings.MIN && range <= settings.MAX;
  }
}

const matchSelect = (offer, selectType, selectValue) => {

  if (selectValue === 'any') {
    return true;
  }

  if (selectType === 'price') {
    return checkPrice(selectValue, offer[selectType]);
  }

  return selectValue === offer[selectType].toString();
}

const matchSelectsForOffer = (offer) => {
  const array = Array.from(selects);

  return array.every((select) => {
    const selectPropType = select.name.split('-')[1];
    return matchSelect(offer, selectPropType, select.value);
  });
}

const matchFeaturesForOffer = (offer) => {
  const features = mapFilters.querySelectorAll('input:checked');
  const filterFeatureList = Array.from(features);

  return filterFeatureList.length === 0 || offer.features.length === 0
}

const orderFilter = (items) => {
  const filteredOffers = [];
  for (let offerItem of items) {
    if (matchSelectsForOffer(offerItem.offer) && matchFeaturesForOffer(offerItem.offer)) {
      filteredOffers.push(offerItem);
      if (filteredOffers.length >= MAX_NUMBER_OF_PINS) {
        break;
      }
    }
  }
  reRenderMarkers(filteredOffers);
}

const addFilterListener = (offers) => {
  const onFilterChange = debounce(() => orderFilter(offers), DEBOUNCE_TIME);

  mapFilters.addEventListener('change', onFilterChange);
}

export {addFilterListener};
