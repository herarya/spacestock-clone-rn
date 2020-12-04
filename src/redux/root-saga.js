import {all} from 'redux-saga/effects';
import {watchAlert} from './app/saga';
import {
  watchApartmentPopular,
  watchAutocomplete,
  watchGetUnitAreas,
  watchUnits,
} from './home/saga';

/*
 * The entry point for all the sagas used in this application.
 */
export default function* rootSaga() {
  yield all([
    watchAlert(),
    watchGetUnitAreas(),
    watchApartmentPopular(),
    watchAutocomplete(),
    watchUnits()
  ]);
}
