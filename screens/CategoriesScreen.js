import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatlistDormeel from '../components/FlatlistDormeel';
import CATEGORIES from '../data/dummy-data';

function CategoriesScreen({data}) {
  return (
    <View>
      <FlatlistDormeel style={styles.catcontainer} data={data} />
    </View>
  );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  catcontainer: {
    flex: 1,
  },
});
