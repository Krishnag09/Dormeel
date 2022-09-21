import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, Image, Pressable} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Likes from '../api/likes';

function MealsOverView({route}) {
  const category = route.params.category;
  const [vegan, setVegan] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  useEffect(() => {
    setLikesset;
  });

  function setLikesset() {
    Likes.action();
    setisLiked(isLiked, true);
  }
  const setVegansetter = () => {
    setVegan(vegan, true);
  };
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
            <Text>{item.duration}</Text>
            <FontAwesomeIcon
              icon="fa-solid fa-leaf"
              color={vegan ? 'green' : ''}
            />
            <Pressable>
              <FontAwesomeIcon
                icon={isLiked ? 'fa-heart' : 'fa-solid fa-heart'}
              />
            </Pressable>
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
    paddingHorizontal: 10,
  },
});
