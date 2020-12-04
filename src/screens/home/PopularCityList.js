import React from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import {Fonts} from './../../assets';
import CardCity from './../../components/CardCity';
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const tileSize = (screenWidth - 40) / numColumns;

const PopularCityList = ({cities, isLoading}) => {
  const renderItem = ({item}) => {
    return <CardCity imageUrl={item.thumbnail} title={item.city} />;
  };
  const keyExtractor = (item, index) => index.toString();

  const renderPlaceHolder = () => {
    return (
      <View style={styles.placeholderWrapper}>
        <Placeholder Animation={Fade}>
          <PlaceholderLine width={30} />
          <View style={styles.placeholder}>
            <PlaceholderMedia style={styles.placeholderImage} />
            <PlaceholderMedia style={styles.placeholderImage} />
            <PlaceholderMedia style={styles.placeholderImage} />
          </View>
        </Placeholder>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        renderPlaceHolder()
      ) : (
        <View style={styles.contentWrapper}>
          <Text style={styles.sectionTitle}>Telusuri</Text>
          <FlatList
            data={cities}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default PopularCityList;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  contentWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  placeholderWrapper: {
    margin: 10,
  },
  placeholder: {
    flexDirection: 'row',
  },
  placeholderImage: {
    width: tileSize,
    height: 150,
    marginRight: 10,
  },
  sectionTitle: {
    ...Fonts.style.h3,
    marginBottom: 5,
  },
});
