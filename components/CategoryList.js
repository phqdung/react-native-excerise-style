import React from 'react';
import {FlatList} from 'react-native';
import CategoryItem from './CategoryItem';

const CategoryList = React.forwardRef((props, ref) => {
  const {data} = props;

  const renderItem = ({item}) => <CategoryItem key={item.id} category={item} />;

  return (
    <FlatList
      ref={ref}
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
});

export default CategoryList;
