import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getWidth, getHeight, normalize} from '../utils/common';
import baseColors from '../assets/baseColors';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('../assets/images/icon-back.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Pizzon - Crib Ln</Text>
      <TouchableOpacity sytle={styles.favoriteButton}>
        <Image source={require('../assets/images/icon-heart.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getHeight(26),
    paddingLeft: getWidth(24),
    paddingRight: getWidth(27),
    paddingBottom: getHeight(4),
  },
  headerTitle: {
    fontSize: normalize(20),
    lineHeight: getHeight(24),
    color: baseColors.text.color2,
    textAlign: 'center',
    fontWeight: '500',
  },
  backButton: {
    paddingHorizontal: getWidth(8),
    paddingVertical: getHeight(5),
  },
  favoriteButton: {
    paddingHorizontal: getWidth(3),
    paddingVertical: getHeight(4),
    backgroundColor: 'blue',
  },
});

export default Header;
