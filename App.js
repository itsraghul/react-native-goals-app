import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [myGoals, setMyGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    setMyGoals((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: goal },
    ]);
    // setGoal('');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goal here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={myGoals}
        renderItem={(itemData) => (
          <View style={styles.goalText}>
            <Text> {itemData.item.value} </Text>
          </View>
        )}
        // style={styles.scrollStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: '5%',
    backgroundColor: '#fff',
    marginTop: '30%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 5,
  },
  goalText: {
    padding: '3%',
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  scrollStyle: {
    margin: 10,
  },
});
