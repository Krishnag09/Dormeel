import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatlistDormeel from '../components/FlatlistDormeel';
import {CATEGORIES} from '../data/dummy-data';

function CategoriesScreen({navigation}) {
  function onPressHandler() {
    navigation.navigate('MealsOverviewScreen');
  }
  return (
    <View>
      <FlatlistDormeel
        style={styles.catcontainer}
        data={CATEGORIES}
        onPress={onPressHandler}
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
