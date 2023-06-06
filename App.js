import { Provider } from "react-redux";
import store from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./src/features/restaurant/MenuScreen";
import OrderScreen from "./src/features/restaurant/OrderScreen";
import ProfileScreen from "./src/features/profile/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShoppingBagIcon, UserIcon } from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FoodStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: "Menu" }} />
    <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: "Order" }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
  </Stack.Navigator>
);

const getColor = (isFocused) => isFocused ? '#4775f2' : '#b8bece';

const foodTab = ({focused}) => <ShoppingBagIcon style={{color: getColor(focused)}}/>;

const profileTab = ({focused}) => <UserIcon style={{color: getColor(focused)}}/>;

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Menu" component={FoodStack} options={{tabBarIcon: foodTab}} />
          <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: profileTab}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
