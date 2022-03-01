import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Goalitem = (props) => {
  return (
    <View style={styles.goalText}>
      <Text> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalText: {
    padding: '3%',
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Goalitem;
