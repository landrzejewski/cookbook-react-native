import { Provider } from "react-redux";
import store from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./src/features/restaurant/MenuScreen";
import OrderScreen from "./src/features/restaurant/OrderScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: "Menu" }} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: "Order" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
