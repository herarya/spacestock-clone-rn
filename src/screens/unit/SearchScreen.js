import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  SectionList,
} from 'react-native';
import styles from './Styles/SearchScreen';
import {Navigation} from 'react-native-navigation';
import {useDispatch, shallowEqual, useSelector} from 'react-redux';
import {clearAutoComplete, fetchAutoComplete} from '../../redux/home/actions';
import {throttle} from 'lodash';

const SearchScreen = ({componentId, buildingType, onSelectItem}) => {
  const dispatch = useDispatch(null);
  const {autocompleteResults} = useSelector(
    (state) => ({
      autocompleteResults: state.home.autocompleteResults,
    }),
    shallowEqual,
  );

  const [keyWord, setKeyWord] = useState('');

  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current.focus();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const onSearchAutocomplete = throttle((search, unitType) => {
    dispatch(fetchAutoComplete({search, unitType}));
  }, 500);

  const onCancel = () => {
    setKeyWord('');
    dispatch(clearAutoComplete());
    Navigation.dismissOverlay(componentId);
  };

  const onChangeText = (text) => {
    setKeyWord(text);
    onSearchAutocomplete(text, buildingType);
  };

  const keyExtractor = (item, index) => index.toString();

  const onPressItem = (item) => {
    onSelectItem(item);
    onCancel();
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressItem(item);
        }}
        style={styles.sectionItem}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderSection = ({section}) => {
    return (
      <View style={styles.section}>
        <Text>{section.type}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            ref={ref}
            style={styles.searchInput}
            value={keyWord}
            autoFocus={true}
            placeholder="Ketik lokasi atau nama gedung"
            onChangeText={onChangeText}
          />
          <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
            <Text>Batal</Text>
          </TouchableOpacity>
        </View>
        <SectionList
          sections={autocompleteResults}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderSectionHeader={renderSection}
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps='handled'
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
