import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import Goalitem from './components/GoalItem';
import Goalinput from './components/GoalInput';

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setMyGoals((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsVisible(false);
  };

  const removeGoalHandler = (goalId) => {
    setMyGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsVisible(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title="Add your Goal!"
        onPress={() => setIsVisible(true)}
        color="purple"
      />
      <Goalinput
        visible={isVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
        placeholder="Give your goal here"
      />
      <FlatList
        data={myGoals}
        renderItem={(itemData) => (
          <Goalitem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
        // style={styles.scrollStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: '10%',
    backgroundColor: '#fff',
    marginTop: '20%',
  },
});
