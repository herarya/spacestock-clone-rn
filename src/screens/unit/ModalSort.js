import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets';
import Button from '../../components/Button';
const ModalSort = ({onDismiss, onSubmit}) => {
  const sorts = [
    {
      label: 'Rekomendasi',
      value: '',
    },
    {
      label: 'A - Z',
      value: 'asc(name)',
    },
    {
      label: 'Z - A',
      value: 'desc(name)',
    },
    {
      label: 'Harga Tertinggi',
      value: 'desc(price)',
    },
    {
      label: 'Harga Terendah',
      value: 'asc(price)',
    },
  ];

  return (
    <View style={styles.content}>
      <View style={styles.body}>
        {sorts.map((item, i) => (
          <TouchableOpacity
            onPress={() => {
              onSubmit(item);
            }}
            style={styles.item}
            key={i}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContent}>
        <Button type="default" title="cancel" onPress={onDismiss} />
      </View>
    </View>
  );
};

export default ModalSort;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
  },
  body: {
    padding: 10,
  },
  item: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    height: 40,
  },
});
