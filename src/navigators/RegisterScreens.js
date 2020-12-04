import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  HOME_SCREEN,
  SEARCH_SCREEN,
  UNIT_DETAIL,
  UNIT_LIST_SCREEN,
} from '../constants/screens';
import {Provider} from 'react-redux';

import createStore from './../redux/configure-store';
import FlashMessage from '../components/FlashMessage';
import Home from '../screens/home';
import UnitList from '../screens/unit/UnitList';
import SearchScreen from '../screens/unit/SearchScreen';
import DetailUnit from '../screens/unit/DetailUnit';
const store = createStore();

const wrapWithRedux = (WrappedComponent) => {
  class ReduxWrapper extends Component {
    static options = WrappedComponent.options;
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }
  return ReduxWrapper;
};

export default function registerScreens() {
  Navigation.registerComponent(HOME_SCREEN, () => wrapWithRedux(Home));
  Navigation.registerComponent(UNIT_LIST_SCREEN, () => wrapWithRedux(UnitList));
  Navigation.registerComponent(SEARCH_SCREEN, () =>
    wrapWithRedux(SearchScreen),
  );
  Navigation.registerComponent(UNIT_DETAIL, () => wrapWithRedux(DetailUnit));
  Navigation.registerComponent('FlashMessage', () => FlashMessage);
}
