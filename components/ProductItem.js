import React from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import baseColors from '../assets/baseColors';
import {
  getWidth,
  getHeight,
  normalize,
  formatNumberWithDecimal,
} from '../utils/common';

const imageSource = {
  'product1.png': require('../assets/images/product1.png'),
  'product2.png': require('../assets/images/product2.png'),
  'product3.png': require('../assets/images/product3.png'),
  'product4.png': require('../assets/images/product4.png'),
};

const ProductItem = props => {
  const {product, productIndex} = props;

  const styleProductItemWrapper = [styles.productItemWrapper];
  if (productIndex === 0) {
    styleProductItemWrapper.push(styles.noBorderTop);
  }
  if (product.isTwice) {
    styleProductItemWrapper.push(styles.productItemWrapperHasTwice);
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={baseColors.background.color2}
      onPress={() => console.log(product.name)}>
      <View style={styles.productItem}>
        <View style={styleProductItemWrapper}>
          <View style={styles.productInfo}>
            <Image source={imageSource[product.image]} />
            <View style={styles.productContent}>
              <View>
                <View style={styles.productTitleWrapper}>
                  <Text style={styles.productTitle}>{product.name}</Text>
                  <Text style={styles.productSubTitle}>
                    KCal : {product.kcal}
                  </Text>
                </View>
                <View>
                  <Text style={styles.productSummary}>{product.summary}</Text>
                </View>
              </View>
              <View style={styles.productPriceWrapper}>
                <Text style={styles.productPrice}>
                  $ {formatNumberWithDecimal(product.price)}
                </Text>
                <Text style={styles.productPriceSale}>
                  $ {formatNumberWithDecimal(product.priceSale)}
                </Text>
              </View>
            </View>
          </View>
          {product.isTwice && (
            <View style={[styles.productTwice]}>
              <Image source={require('../assets/images/check-circle.png')} />
              <Text style={styles.productTwiceText}>twice by you</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  productItem: {
    paddingHorizontal: getWidth(24),
  },
  productItemWrapper: {
    paddingVertical: getHeight(16),
    borderTopWidth: getHeight(1),
    borderColor: baseColors.line.color2,
  },
  noBorderTop: {
    borderTopWidth: 0,
  },
  productItemWrapperHasTwice: {
    paddingBottom: 0,
  },
  productLine: {
    width: '100%',
    backgroundColor: 'blue',
    height: getHeight(2),
  },
  productContent: {
    paddingLeft: getWidth(16),
    justifyContent: 'space-between',
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  productTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: getHeight(4),
  },
  productTitle: {
    fontSize: normalize(16),
    lineHeight: getHeight(19.2),
    fontWeight: 'bold',
    color: baseColors.text.color2,
    marginRight: getWidth(10),
  },
  productSubTitle: {
    fontSize: normalize(12),
    lineHeight: getHeight(14.4),
    fontWeight: '500',
    color: baseColors.text.color3,
    bottom: getHeight(1),
  },
  productSummary: {
    fontSize: normalize(12),
    lineHeight: getHeight(18),
    fontWeight: '500',
    color: baseColors.text.color4,
  },
  productPriceWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  productPrice: {
    fontSize: normalize(16),
    lineHeight: getHeight(19.2),
    color: baseColors.text.color5,
    marginRight: getWidth(15),
  },
  productPriceSale: {
    fontSize: normalize(12),
    lineHeight: getHeight(18),
    fontWeight: '500',
    color: baseColors.text.color4,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: baseColors.text.color4,
  },
  productTwice: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: getHeight(8),
    paddingBottom: getHeight(6),
  },
  productTwiceText: {
    fontSize: normalize(12),
    lineHeight: getHeight(18),
    fontWeight: '500',
    color: baseColors.text.color4,
    marginLeft: getWidth(4),
  },
});

export default ProductItem;
