import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

function DormeeelGridCard({item}) {
  return (
    <View style={[styles.gridcard, {backgroundColor: item.color}]}>
      <Pressable
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
const styles = StyleSheet.create({
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
export default DormeeelGridCard;
