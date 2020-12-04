import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import sagas from './root-saga';

export default function initializeStore() {
  const sagaMiddleware = createSagaMiddleware();

  // eslint-disable-next-line no-undef
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(sagas);

  return store;
}
