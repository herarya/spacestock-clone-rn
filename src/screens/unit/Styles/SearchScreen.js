import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../assets';
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height,
  },
  searchBar: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
  },
  btnCancel: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  sectionItem: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
});
export default styles;
