import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MealsOverView({route}) {
  const category = route.params.category;
  return (
    <View styles={styles.container}>
      <Text> this is the thing- {category}</Text>
    </View>
  );
}
export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});
