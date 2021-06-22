import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import baseColors from '../assets/baseColors';
import {screenWidth, getWidth, getHeight, normalize} from '../utils/common';

const NotifyCartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <View>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/images/shopping-bag.png')} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Checkout - 1 items</Text>
          <Text style={styles.productName}>Pizzon - Crib Ln</Text>
        </View>
        <View style={styles.closeButton}>
          <TouchableWithoutFeedback>
            <View style={styles.closeButtonWrapper}>
              <Image source={require('../assets/images/close.png')} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const leftPosition = (screenWidth - getWidth(311)) / 2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: getHeight(27),
    zIndex: 10,
    width: getWidth(311),
    left: leftPosition,
    backgroundColor: '#fff',

    borderRadius: normalize(6),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 32,

    elevation: 12,
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    paddingHorizontal: getWidth(12),
    paddingTop: getHeight(8),
    paddingBottom: getHeight(9),
  },
  iconWrapper: {
    width: getHeight(30),
    height: getHeight(30),
    backgroundColor: baseColors.background.color3,
    borderRadius: normalize(6),

    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingLeft: getWidth(12),
  },
  title: {
    fontSize: normalize(12),
    lineHeight: getHeight(18),
    fontWeight: '500',
    color: baseColors.text.color4,
    marginBottom: getHeight(2),
  },
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
  closeButtonWrapper: {
    width: normalize(30),
    height: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontSize: normalize(16),
    lineHeight: getHeight(19.2),
    fontWeight: 'bold',
    color: baseColors.text.color2,
  },
});

export default NotifyCartItem;
