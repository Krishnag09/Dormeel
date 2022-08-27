import React from 'react';
import {FlatList, Pressable, Text, View, StyleSheet} from 'react-native';

function FlatlistDormeel({data, navigation}) {
  function renderCategoryItem({item}) {
    function onPressHandler() {
      navigation.navigate('MealsOverviewScreen', {category: item.id});
    }
    return (
      <View style={[styles.gridcard, {backgroundColor: item.color}]}>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => [
            styles.button,
            pressed ? styles.buttonpressed : null,
          ]}>
          <View style={styles.innercontainer}>
            <Text style={styles.gridtext}>{item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  }
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
  gridcard: {
    height: 150,
    margin: 20,
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.75,
  },
  gridtext: {
    fontSize: 18,
    fontWeight: '400',
  },
  innercontainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  buttonpressed: {
    opacity: 0.5,
  },
});

export default FlatlistDormeel;
