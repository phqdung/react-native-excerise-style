import React, {createRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//components
import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import CategoryList from './components/CategoryList';
import NotifyCartItem from './components/NotifyCartItem';
//data
import categoryData from './data/categorydata';

const App = () => {
  const [categoryList] = useState(categoryData);

  const menuData = categoryList.map(category => {
    return {
      id: category.id,
      text: category.shortTitle,
    };
  });

  const flatListRef = createRef();

  const handleScrollToCategory = index => {
    flatListRef.current.scrollToIndex({animated: true, index: index});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CategoryMenu
        data={menuData}
        onScrollToCategory={handleScrollToCategory}
      />
      <CategoryList ref={flatListRef} data={categoryData} />
      <NotifyCartItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
