import {Navigation} from 'react-native-navigation';
import {apply, put, takeEvery} from 'redux-saga/effects';
import {ALERT, closeAlert} from './actions';

export function* handleAlert(action) {
  const {alertType, payload} = action;
  if (payload) {
    yield apply(Navigation, Navigation.showOverlay, [
      {
        component: {
          name: 'FlashMessage',
          passProps: {
            alertType,
            message: payload,
          },
          options: {
            layout: {
              componentBackgroundColor: 'transparent',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    ]);
    yield put(closeAlert());
  }
  return null;
}

export function* watchAlert() {
  yield takeEvery(ALERT.SHOW, handleAlert);
}
