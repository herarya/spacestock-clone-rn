/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import CardApartemen from '../../components/CardApartemen';
import CardOffice from '../../components/CardOffice';
import {fetchUnits} from '../../redux/home/actions';
import styles from './Styles/UnitList';
import Modal from 'react-native-modal';
import ModalFilter from './ModalFilter';
import ModalSort from './ModalSort';
import {Navigation} from 'react-native-navigation';
import {UNIT_DETAIL} from '../../constants/screens';

const UnitList = ({params, componentId}) => {
  const dispatch = useDispatch(null);
  const {units} = useSelector(
    (state) => ({
      units: state.home.units,
    }),
    shallowEqual,
  );

  const [showModalfilter, setShowModalfilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [paramsFilter, setParamsFilter] = useState(null);

  useEffect(() => {
    loadData(params);
    setParamsFilter(params);
  }, [params]);

  const loadData = (params) => {
    dispatch(fetchUnits(params));
  };

  const onFilter = (values) => {
    setShowModalfilter(false);
    const newParams = {
      ...paramsFilter,
      ...values,
    };
    setParamsFilter(newParams);
    loadData(newParams);
  };

  const onSort = (item) => {
    setShowSort(false);
    const newParams = {
      ...paramsFilter,
      sort: item.value,
    };
    setParamsFilter(newParams);
    loadData(newParams);
  };

  const keyExtractor = (item, index) => index.toString();

  const openModalFilter = () => {
    setShowModalfilter(true);
  };

  const openModalSort = () => {
    setShowSort(true);
  };

  const renderItem = ({item}) => {
    if (item.category === 'Office') {
      return (
        <CardOffice
          onPress={() => {
            onPressItem(item);
          }}
          unit={item}
          cardStyle={{flex: 1, margin: 5}}
        />
      );
    }
    return (
      <CardApartemen
        onPress={() => {
          onPressItem(item);
        }}
        unit={item}
        cardStyle={{flex: 1, margin: 5}}
      />
    );
  };

  const onPressItem = (unit) => {
    Navigation.push(componentId, {
      component: {
        name: UNIT_DETAIL,
        passProps: {
          unit,
        },
      },
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={units}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        style={{margin: 5}}
      />
      <View style={styles.actionButtonContent}>
        <TouchableOpacity style={styles.actionButton} onPress={openModalFilter}>
          <Text>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={openModalSort}>
          <Text>Sort</Text>
        </TouchableOpacity>
      </View>
      <Modal
        onBackdropPress={() => setShowModalfilter(false)}
        avoidKeyboard
        isVisible={showModalfilter}>
        <ModalFilter
          onSubmit={onFilter}
          onDismiss={() => {
            setShowModalfilter(false);
          }}
        />
      </Modal>
      <Modal onBackdropPress={() => setShowSort(false)} isVisible={showSort}>
        <ModalSort
          onSubmit={onSort}
          onDismiss={() => {
            setShowSort(false);
          }}
        />
      </Modal>
    </View>
  );
};
export default UnitList;
