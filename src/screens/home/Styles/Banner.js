import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  bannerImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
export default styles;
