import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverView from './screens/MealsOverview';
import FlatlistDormeel from './components/FlatlistDormeel';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';

library.add(fab, far, fas, faSquareCheck);

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverviewScreen" component={MealsOverView} />
        <Stack.Screen name="FlatlistDormeel" component={FlatlistDormeel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
