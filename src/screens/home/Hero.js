import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Images} from '../../assets';
import SearchForm from './SearchForm';
import styles from './Styles/Home';

const Hero = ({
  onPressSearch,
  onSearch,
  onChangeListingType,
  onChangeBuildingType,
}) => {
  return (
    <View style={styles.heroContainer}>
      <ImageBackground style={styles.heroBg} source={Images.bannerBg}>
        <View style={styles.logoWrapper}>
          <Image source={Images.spaceStockLogo} />
        </View>
        <SearchForm
          onSearch={onSearch}
          onPressSearch={onPressSearch}
          onChangeListingType={onChangeListingType}
          onChangeBuildingType={onChangeBuildingType}
        />
      </ImageBackground>
    </View>
  );
};

export default Hero;
