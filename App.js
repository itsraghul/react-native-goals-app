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
import Goalitem from './components/GoalItem';
import Goalinput from './components/GoalInput';

export default function App() {
  const [myGoals, setMyGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setMyGoals((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: goal },
    ]);
    // setGoal('');
  };
  return (
    <View style={styles.screen}>
      <Goalinput onAddGoal={addGoalHandler} placeholder="Give your goal here" />
      <FlatList
        data={myGoals}
        renderItem={(itemData) => <Goalitem title={itemData.item.value} />}
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

  scrollStyle: {
    margin: 10,
  },
});
