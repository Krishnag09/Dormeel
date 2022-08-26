import CategoriesScreen from './screens/CategoriesScreen';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {CATEGORIES} from './data/dummy-data';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen data={CATEGORIES} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
