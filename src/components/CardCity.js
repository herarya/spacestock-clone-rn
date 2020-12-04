import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {BASE_IMAGE_URL} from './../constants/constants';
const widthScreen = Dimensions.get('window').width;
const cardWidth = widthScreen / 3 - 20;
const CardCity = ({imageUrl, title}) => {
  const url = `${BASE_IMAGE_URL}/${imageUrl}`;
  return (
    <View style={styles.container}>
      <ImageBackground
        borderRadius={5}
        style={styles.imageWrapper}
        source={{uri: url}}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

CardCity.defaultProps = {
  imageUrl: null,
};
CardCity.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default CardCity;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: cardWidth,
  },
  imageWrapper: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
  },
});
