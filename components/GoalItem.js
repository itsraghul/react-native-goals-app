import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Goalitem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalText}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalText: {
    padding: '3%',
    marginVertical: 10,
    backgroundColor: '#9692e0',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Goalitem;
