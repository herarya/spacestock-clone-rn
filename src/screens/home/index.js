/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {UNIT_TYPES} from '../../constants/constants';
import {SEARCH_SCREEN, UNIT_LIST_SCREEN} from '../../constants/screens';
import {getApartmentPopular, getUnitAreas} from '../../redux/home/actions';
import Banner from './Banner';
import Hero from './Hero';
import PopularApartmentList from './PopularApartmentList';
import PopularCityList from './PopularCityList';

// https://spacestock.com/api/discovery/1.0/complex?sort=desc(price)&page=1&size=12&listing_type=rent&building_type=apartment&area=Jakarta%20Pusat

const Home = ({componentId}) => {
  const dispatch = useDispatch(null);
  const {cities, loadingCities, apartmentPopular, loadingPopular} = useSelector(
    (state) => ({
      cities: state.home.cities,
      loadingCities: state.home.loadingCities,
      apartmentPopular: state.home.apartmentPopular,
      loadingPopular: state.home.loadingPopular,
    }),
    shallowEqual,
  );

  const [listingType, setListingType] = useState('rent');
  const [buildingType, setBuildingType] = useState(UNIT_TYPES[0].value);

  useEffect(() => {
    loadCityArea();
    loadApartment();
  }, []);

  const loadCityArea = () => {
    dispatch(getUnitAreas());
  };

  const loadApartment = () => {
    dispatch(getApartmentPopular());
  };

  const onChangeListingType = (value) => {
    setListingType(value);
  };

  const onChangeBuildingType = (value) => {
    setBuildingType(value);
  };

  const goToListing = (values = {}) => {
    let params = {
      page: 1,
      size: 12,
      building_type: buildingType,
      listing_type: listingType,
      ...values,
    };
    console.log(params);
    Navigation.push(componentId, {
      component: {
        name: UNIT_LIST_SCREEN,
        passProps: {
          params,
        },
      },
    });
  };

  const onSearchListing = () => {
    openSearchScreen();
  };

  const onSearchUnit = () => {
    goToListing();
  };

  const onSelectItem = (item) => {
    let params = {};
    if (item.label === 'apartment') {
      params.apartment = item.name;
    }
    if (item.label === 'location') {
      params.area = item.name;
    }
    if (item.label === 'poi') {
      params.poi = item.name;
    }
    goToListing(params);
  };

  const openSearchScreen = () => {
    Navigation.showOverlay({
      component: {
        name: SEARCH_SCREEN,
        passProps: {
          buildingType,
          onSelectItem: (item) => onSelectItem(item),
        },
        waitForRender: true,
        options: {
          layout: {
            componentBackgroundColor: 'white',
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
      },
    });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}>
      <Hero
        onSearch={onSearchListing}
        onPressSearch={onSearchUnit}
        onChangeListingType={onChangeListingType}
        onChangeBuildingType={onChangeBuildingType}
      />
      <Banner />
      <PopularCityList cities={cities} isLoading={loadingCities} />
      <PopularApartmentList
        data={apartmentPopular}
        isLoading={loadingPopular}
      />
    </ScrollView>
  );
};

Home.options = {
  topBar: {
    noBorder: true,
    drawBehind: true,
    background: {
      color: 'transparent',
    },
  },
};

export default Home;
