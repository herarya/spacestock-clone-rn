import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import {UNIT_TYPES} from '../../constants/constants';
import {Colors} from './../../assets';
import styles from './Styles/SearchForm';

const SearchForm = ({
  onPressSearch,
  onSearch,
  onChangeListingType,
  onChangeBuildingType,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, marginRight: 10}}>
          <SwitchSelector
            options={UNIT_TYPES}
            initial={0}
            buttonColor={Colors.primary}
            onPress={(value) => onChangeBuildingType(value)}
          />
        </View>
        <View style={{width: 100}}>
          <SwitchSelector
            options={[
              {label: 'Sewa', value: 'rent'},
              {label: 'Beli', value: 'buy'},
            ]}
            initial={0}
            textColor={Colors.primary} //'#7a44cf'
            selectedColor={'white'}
            buttonColor={Colors.primary}
            borderColor={Colors.primary}
            hasPadding
            onPress={(value) => onChangeListingType(value)}
          />
        </View>
      </View>

      <View style={styles.searchInput}>
        <TouchableOpacity onPress={onSearch} style={styles.searchInputWrapper}>
          <View style={styles.icnSearchWrapper}>
            <Icon name="search" color={Colors.lightGrey} />
          </View>
          <Text style={{color: Colors.lightGrey}}>
            Ketik lokasi atau nama gedung
          </Text>
          {/* <TextInput
            placeholder="Ketik lokasi atau nama gedung"
            value={keyWord}
            onChangeText={(text) => setKeyWord(text)}
          /> */}
        </TouchableOpacity>

        <View style={styles.btnSearchWrapper}>
          <Button title="Cari" type="primary" onPress={onPressSearch} />
        </View>
      </View>
    </View>
  );
};
export default SearchForm;
