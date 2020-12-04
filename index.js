import {Navigation} from 'react-native-navigation';
import {AppLaunched} from './src/navigators';
import registerScreens from './src/navigators/RegisterScreens';

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens();
  AppLaunched();
});
