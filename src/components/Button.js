/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../assets';

const Button = ({onPress, title, type}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'primary' ? Colors.primary : Colors.lightGrey,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          color: type === 'primary' ? 'white' : 'black',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'primary',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'default']),
  onPress: PropTypes.func.isRequired,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
