/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {Navigation} from 'react-native-navigation';

const FlashMessage = ({alertType, message, componentId}) => {
  const [keyFrames, setKeyFrames] = useState({
    from: {translateY: -120},
    to: {translateY: 0},
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyFrames({
        from: {translateY: 0},
        to: {translateY: -120},
      });
      setTimeout(() => {
        Navigation.dismissOverlay(componentId);
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismissNotification = () => {
    setKeyFrames({
      from: {translateY: 0},
      to: {translateY: -120},
    });
    Navigation.dismissOverlay(componentId);
  };

  let backgroundColor;
  let color;
  switch (alertType) {
    case 'success':
      backgroundColor = 'rgba(198, 235, 158, 1)';
      color = '#65962e';
      break;
    case 'error':
      backgroundColor = 'rgba(246, 204, 215, 1)';
      color = '#b8123e';
      break;
    case 'warning':
      backgroundColor = '#fcedd5';
      color = '#c36418';
      break;
    case 'info':
      backgroundColor = '#3498db';
      break;
    default:
      backgroundColor = '#8e44ad';
      color = 'white';
      break;
  }
  return (
    <TouchableOpacity activeOpacity={1} onPress={dismissNotification}>
      <Animatable.View
        useNativeDriver
        duration={500}
        animation={keyFrames}
        style={[styles.container, {backgroundColor}]}>
        <View style={{paddingTop: 10}}>
          <Text
            style={[styles.message, {color: color}]}
            numberOfLines={3}
            ellipsizeMode="middle">
            {message}
          </Text>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};
FlashMessage.defaultProps = {
  alertType: null,
  message: null,
};
FlashMessage.propTypes = {
  alertType: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string,
};

export default FlashMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff505c',
    paddingHorizontal: 16,
    position: 'absolute',
    left: 40,
    right: 40,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 20,
  },
  message: {
    fontSize: 15,
  },
});
