import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuIcon from '../component/MenuIcon';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Top Up'},
  {id: 3, label: 'Top Up'},
];

const Beranda = () => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <MenuIcon label={item.label} />}
        horizontal={true}
      />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
