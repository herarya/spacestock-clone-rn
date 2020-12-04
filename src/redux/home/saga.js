import {call, put, takeEvery} from 'redux-saga/effects';
import {UNIT_TYPES} from '../../constants/constants';
import {
  fetchPopularApartment,
  fetchUnitAreas,
  requestAutocomplete,
  requestUnits,
} from '../../services/unit';
import {showAlert} from '../app/actions';
import {
  GET_APARTMENT_POPULAR,
  GET_AUTOCOMPLETE,
  GET_UNITS,
  GET_UNIT_AREA,
} from './actions';

export function* handleGetUnitAreas() {
  try {
    const response = yield call(fetchUnitAreas);
    yield put({type: GET_UNIT_AREA.SUCCESS, response});
  } catch (error) {
    yield put(showAlert(error.data, 'error'));
    yield put({type: GET_UNIT_AREA.FAILURE});
  }
}
export function* watchGetUnitAreas() {
  yield takeEvery(GET_UNIT_AREA.REQUEST, handleGetUnitAreas);
}

export function* handleApartmentPopular() {
  try {
    const response = yield call(fetchPopularApartment);
    yield put({type: GET_APARTMENT_POPULAR.SUCCESS, response});
  } catch (error) {
    yield put(showAlert(error.data, 'error'));
    yield put({type: GET_APARTMENT_POPULAR.FAILURE});
  }
}
export function* watchApartmentPopular() {
  yield takeEvery(GET_APARTMENT_POPULAR.REQUEST, handleApartmentPopular);
}

export function* handleAutocomplete(action) {
  try {
    const {params} = action;
    const response = yield call(requestAutocomplete, params);
    yield put({type: GET_AUTOCOMPLETE.SUCCESS, response});
  } catch (error) {
    yield put(showAlert(error.data, 'error'));
    yield put({type: GET_AUTOCOMPLETE.FAILURE});
  }
}
export function* watchAutocomplete() {
  yield takeEvery(GET_AUTOCOMPLETE.REQUEST, handleAutocomplete);
}

export function* handleUnits(action) {
  try {
    const {params} = action;
    const response = yield call(requestUnits, params);
    yield put({type: GET_UNITS.SUCCESS, response});
  } catch (error) {
    yield put(showAlert(error.data, 'error'));
    yield put({type: GET_UNITS.FAILURE});
  }
}
export function* watchUnits() {
  yield takeEvery(GET_UNITS.REQUEST, handleUnits);
}
