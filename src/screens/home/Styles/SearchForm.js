import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  searchInput: {
    flexDirection: 'row',
    height: 50,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnSearchWrapper: {
    width: 70,
    margin: 5,
  },
  icnSearchWrapper: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autocomplete: {
    flex : 1,
  },
  autocompleteInput: {
    borderWidth: 0,
    paddingHorizontal: 5,
  },
});
export default styles;
