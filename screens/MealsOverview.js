import React from 'react';
import {View, FlatList, StyleSheet, Text, Image, Pressable} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faCoffee} from '@fortawesome/fontawesome-free-solid';

function MealsOverView({route}) {
  const category = route.params.category;
  const displayedMeals = MEALS.filter(mealitem => {
    return mealitem.categoryIds.indexOf(category);
  });
  function renderMenuItem({item}) {
    return (
      <View style={styles.menucard}>
        <Pressable>
          <View>
            <Image
              style={styles.imagecontainer}
              source={{uri: item.imageUrl}}
            />
          </View>
          <View style={styles.producttitle}>
            <Text>{item.title}</Text>
          </View>
          <View style={styles.iconcontainer}>
            <Text>{item.duration} </Text>
            <FontAwesomeIcon
              icon={
                item.isVegan
                  ? 'fa-duotone fa-seedling'
                  : 'fa-light fa-seedling-crosshairs-slash'
              }
            />
            <FontAwesomeIcon
              icon={
                item.isVegan
                  ? 'fa-duotone fa-seedling'
                  : 'fa-light fa-seedling-crosshairs-slash'
              }
            />
            <FontAwesomeIcon icon={faCoffee} />
            <Text>hello</Text>
          </View>
        </Pressable>
      </View>
    );
  }
  return (
    <View styles={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  menucard: {
    height: 200,
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    backgroundColor: '#EFECF6',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  producttitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#F9F7FF',
    textAlign: 'center',
    margin: 8,
  },
  imagecontainer: {
    height: 100,
    width: '100%',
    borderRadius: 8,
  },
  isveganicon: {
    height: 8,
    width: 8,
  },
  iconcontainer: {
    flexDirection: 'row',
  },
});
