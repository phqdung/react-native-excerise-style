import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {getWidth, getHeight, normalize} from '../utils/common';
import baseColors from '../assets/baseColors';

const CategoryMenu = props => {
  const {data, onScrollToCategory} = props;
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const ref = createRef();

  const handleMenuItemClick = index => () => {
    ref.current.scrollToIndex({animated: true, index: index});
    setCurrentMenuIndex(index);
    onScrollToCategory(index);
  };

  const renderItem = ({index, item}) => {
    if (index !== currentMenuIndex) {
      return (
        <View key={item.id}>
          <TouchableWithoutFeedback onPress={handleMenuItemClick(index)}>
            <Text style={styles.menuItemText}>{item.text}</Text>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      return (
        <View key={item.id}>
          <TouchableWithoutFeedback onPress={handleMenuItemClick(index)}>
            <View>
              <Text style={[styles.menuItemText, styles.menuItemTextActive]}>
                {item.text}
              </Text>
              <View style={styles.menuItemCircleWrapper}>
                <View style={styles.menuItemCircle} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
  };

  return (
    <View style={styles.menuContainer}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: getWidth(12),
    borderBottomWidth: getHeight(1),
    borderBottomColor: baseColors.line.color1,
  },
  menuItemText: {
    color: baseColors.text.color1,
    paddingVertical: getHeight(20),
    paddingHorizontal: getWidth(12),
    fontSize: normalize(15),
    lineHeight: getHeight(18),
    fontWeight: '500',
  },
  menuItemTextActive: {
    color: baseColors.text.color2,
    fontWeight: 'bold',
  },
  menuItemCircleWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: getHeight(8),
  },
  menuItemCircle: {
    width: getWidth(8),
    height: getWidth(8),
    backgroundColor: baseColors.background.color1,
    borderRadius: getWidth(8),
  },
});

export default CategoryMenu;
