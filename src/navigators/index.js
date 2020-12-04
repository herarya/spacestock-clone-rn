import {Navigation} from 'react-native-navigation';
import {HOME_SCREEN} from '../constants/screens';

export const AppLaunched = () => {
  pushHomeScreen();
};

export async function pushHomeScreen() {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: HOME_SCREEN,
            },
          },
        ],
      },
    },
  });
}
