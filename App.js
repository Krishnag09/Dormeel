import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverView from './screens/MealsOverview';
import FlatlistDormeel from './components/FlatlistDormeel';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
