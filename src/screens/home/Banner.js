import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '../../assets';

import styles from './Styles/Banner';

const Banner = () => (
  <View style={styles.container}>
    <Image
      borderRadius={10}
      style={styles.bannerImage}
      source={Images.carousel1}
    />
  </View>
);

export default Banner;
