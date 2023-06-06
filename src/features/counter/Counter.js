import { Text, View, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount, incrementBy, incrementAsync } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Decrement" onPress={() => dispatch(decrement())}/>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())}/>
      {/*<Button title="Increment async by 4" onPress={() => dispatch(incrementAsync(4))}/>*/}
    </View>
  )
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 6
  }
});
