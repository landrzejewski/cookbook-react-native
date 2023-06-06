import { SafeAreaView, StyleSheet, View } from "react-native";
import Counter from "./src/features/counter/Counter";
import { Provider } from "react-redux";
import store from "./src/app/store";

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaView>
          <Counter />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
