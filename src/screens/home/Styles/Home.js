import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroContainer: {
    height: 300,
  },
  heroBg: {
    width: width,
    height: 300,
  },
  logoWrapper: {
    height: 60,
    marginTop: 60,
    alignItems: 'center',
  },
});
export default styles;
