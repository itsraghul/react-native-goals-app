import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const Goalinput = (props) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal('');
  };

  const cancelGoalHandler = () => {
    props.onCancel();
    setGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button title="X Cancel" onPress={cancelGoalHandler} color="red" />
          </View>
          <View style={styles.button}>
            <Button
              title="+ ADD GOAL"
              onPress={addGoalHandler}
              color="purple"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  button: {
    width: '40%',
  },
});

export default Goalinput;
