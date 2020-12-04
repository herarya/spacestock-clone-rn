import React from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Fonts} from './../../assets';
import CardApartement from './../../components/CardApartemen';
const widthScreen = Dimensions.get('window').width;
const cardWidth = widthScreen / 2 - 20;
const PopularApartmentList = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <CardApartement
        width={cardWidth}
        unit={item}
        cardStyle={{marginLeft: 5}}
      />
    );
  };

  const keyExtractor = (item, index) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Apartment Populer</Text>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularApartmentList;

const styles = StyleSheet.create({
  container: {
    height: 250,
    paddingLeft: 10,
    marginTop: 20,
  },
  sectionTitle: {
    ...Fonts.style.h3,
    marginBottom: 10,
  },
});
