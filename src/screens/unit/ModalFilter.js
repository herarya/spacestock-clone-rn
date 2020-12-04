import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../assets';
import Button from '../../components/Button';
const ModalFilter = ({onDismiss, onSubmit}) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const onFilter = () => {
    let params = {};
    if (minPrice && maxPrice) {
      params.price = `range(${minPrice},${maxPrice})`;
    } else if (minPrice) {
      params.price = `gte(${minPrice})`;
    } else if (maxPrice) {
      params.price = `lte(${maxPrice})`;
    }
    onSubmit(params);
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentForm}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMinPrice(text)}
          value={minPrice}
          placeholder="min harga"
        />
        <View style={{width: 20}} />
        <TextInput
          onChangeText={(text) => setMaxPrice(text)}
          style={styles.input}
          value={maxPrice}
          placeholder="max harga"
        />
      </View>
      <View style={styles.buttonContent}>
        <Button type="default" title="cancel" onPress={onDismiss} />
        <View style={{width: 20}} />
        <Button type="primary" title="filter" onPress={onFilter}/>
      </View>
    </View>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
  },
  contentForm: {
    height: 80,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    flex: 1,
    padding: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    height: 40,
  },
});
