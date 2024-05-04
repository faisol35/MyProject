import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MenuIcon = () => {
  return (
    <TouchableOpacity style={styles.box}>
      <View style={styles.garis}>
        <Text style={styles.text}>Icon</Text>
      </View>
      <Text style={styles.text}>LABEL</Text>
    </TouchableOpacity>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  garis: {
    borderWidth: 2,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
