import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatlistDormeel from '../components/FlatlistDormeel';
import {CATEGORIES} from '../data/dummy-data';

function CategoriesScreen({navigation}) {
  return (
    <View>
      <FlatlistDormeel
        style={styles.catcontainer}
        data={CATEGORIES}
        navigation={navigation}
      />
    </View>
  );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  catcontainer: {
    flex: 1,
  },
});
