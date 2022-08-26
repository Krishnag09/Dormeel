import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import DormeeelGridCard from './DormeelCard';
function renderCategoryItem({item}) {
  return <DormeeelGridCard item={item} />;
}

function FlatlistDormeel({data}) {
  console.log('flatlist', data);
  return (
    <View style={styles.catgridcontainer}>
      <FlatList
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  catgridcontainer: {
    backgroundColor: '#24180f',
    padding: 20,
    borderColor: 'f9c2ff',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default FlatlistDormeel;
