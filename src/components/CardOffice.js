import {get} from 'lodash';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../assets';
import {BASE_IMAGE_URL_UNIT_OFFICE} from '../constants/constants';

const CardOffice = ({unit, width, cardStyle, onPress}) => {
  const images_exterior = get(unit, 'images.images_exterior') || [];
  const unitThumbnail =
    images_exterior.length > 0 ? images_exterior[0].url : '';
  const url = `${BASE_IMAGE_URL_UNIT_OFFICE}/${unitThumbnail}`;

  const priceStart = get(unit, 'aggregation.price.base_rent', '-');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width: width}, cardStyle && cardStyle]}>
      <Image
        resizeMode="contain"
        style={styles.imageWrapper}
        source={{uri: url}}
      />
      <View style={styles.unitInfoWrapper}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {unit.suggest_name}
        </Text>
        <Text>Mulai</Text>
        <Text style={styles.title}>Rp. {priceStart}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardOffice;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imageWrapper: {
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  startLabel: {
    color: Colors.lightGrey,
  },
  unitInfoWrapper: {
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderTopWidth: 0,
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    ...Fonts.style.h4,
  },
});
