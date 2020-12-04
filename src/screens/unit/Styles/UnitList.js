import {Dimensions, StyleSheet} from 'react-native';
const widthScreen = Dimensions.get('window').width;
const menuWidth = widthScreen / 2 - 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonContent: {
    position: 'absolute',
    bottom: 20,
    width: 200,
    left: menuWidth,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50 / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
