import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductItem from './ProductItem';
import baseColors from '../assets/baseColors';
import {getWidth, getHeight, normalize} from '../utils/common';

const CategoryItem = props => {
  const {category} = props;

  const renderItem = ({index, item}) => (
    <ProductItem key={item.id} product={item} productIndex={index} />
  );

  return (
    <View style={styles.categorySection}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
      <FlatList
        data={category.products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categorySection: {
    borderBottomWidth: 5,
    borderColor: baseColors.line.color2,
  },
  categoryHeader: {
    paddingHorizontal: getWidth(24),
    paddingTop: getHeight(24),
    paddingBottom: getHeight(8),
  },
  categoryTitle: {
    fontSize: normalize(20),
    lineHeight: getHeight(24),
    fontWeight: '500',
    color: baseColors.text.color2,
  },
});

export default CategoryItem;
