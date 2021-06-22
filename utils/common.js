import {Dimensions, PixelRatio, Platform} from 'react-native';

const baseWidth = 375;
const baseHeight = 812;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const getWidth = size => {
  return (size * screenWidth) / baseWidth;
};

const getHeight = size => {
  return (size * screenHeight) / baseHeight;
};

const normalize = size => {
  const newSize = (size * screenWidth) / baseWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const formatNumberWithDecimal = (num, decimal = 2) => {
  return (Math.round(num * 100) / 100).toFixed(decimal);
};

export {
  screenWidth,
  screenHeight,
  getWidth,
  getHeight,
  normalize,
  formatNumberWithDecimal,
};
