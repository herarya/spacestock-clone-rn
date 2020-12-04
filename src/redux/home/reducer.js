import {Record} from 'immutable';
import {ALERT} from '../app/actions';
import {
  GET_UNIT_AREA,
  GET_APARTMENT_POPULAR,
  GET_AUTOCOMPLETE,
  GET_UNITS,
} from './actions';

const ObjectRecord = new Record({
  loadingCities: false,
  cities: [],
  loadingPopular: false,
  apartmentPopular: [],
  autocompleteResults: [],
  units: [],
});

const initialState = new ObjectRecord();

const home = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIT_AREA.REQUEST:
      return state.set('loadingCities', true);
    case GET_UNIT_AREA.SUCCESS:
      return state
        .set('loadingCities', false)
        .set('cities', action.response?.data);
    case GET_UNIT_AREA.FAILURE:
      return state.set('loadingCities', false);
    case GET_UNIT_AREA.REQUEST:
      return state.set('loadingCities', true);
    case GET_APARTMENT_POPULAR.SUCCESS:
      return state
        .set('loadingPopular', false)
        .set('apartmentPopular', action.response?.data);
    case GET_APARTMENT_POPULAR.FAILURE:
      return state.set('loadingPopular', false);
    case GET_AUTOCOMPLETE.SUCCESS:
      return state.set('autocompleteResults', action.response.data);
    case GET_AUTOCOMPLETE.CLEAR:
      return state.set('autocompleteResults', []);
    case GET_UNITS.SUCCESS:
      return state.set('units', action.response?.data);
    case ALERT.SHOW:
      return state.set('loadingPopular', false);
    default:
      return state;
  }
};

export default home;
