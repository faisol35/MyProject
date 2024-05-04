import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MenuIcon from '../component/MenuIcon';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Top Up'},
  {id: 3, label: 'Top Up'},
];

const Beranda = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <MenuIcon label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={styles.tombol}>
        <Text style={styles.text}>Ke Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  tombol: {
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    margin: 7,
    borderRadius: 30,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 23,
    color: 'blue',
    fontStyle: 'italic',
  },
});
