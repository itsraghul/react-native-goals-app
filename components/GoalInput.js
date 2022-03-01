import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const Goalinput = (props) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Goalinput;
