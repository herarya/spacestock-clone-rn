/* eslint-disable react-native/no-inline-styles */
import {get} from 'lodash';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../assets';
import {
  BASE_IMAGE_URL_UNIT,
  BASE_IMAGE_URL_UNIT_OFFICE,
} from '../../constants/constants';

const DetailUnit = ({unit}) => {
  const images_exterior = get(unit, 'images.images_exterior') || [];
  const unitThumbnail =
    images_exterior.length > 0 ? images_exterior[0].url : '';
  const url = `${
    unit.category === 'Office'
      ? BASE_IMAGE_URL_UNIT_OFFICE
      : BASE_IMAGE_URL_UNIT
  }/${unitThumbnail}`;
  return (
    <ScrollView>
      <Image source={{uri: url}} style={{height: 300}} />
      <View style={styles.content}>
        <Text style={Fonts.style.h3}>{unit.name}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailUnit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
  },
});
