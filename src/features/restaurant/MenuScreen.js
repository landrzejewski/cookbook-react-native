import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadMenuItems, selectMenuItems } from "./restaurantSlice";

const MenuScreen = ({ navigation }) => {
  const menuItems = useSelector(selectMenuItems);
  const dispatch = useDispatch();
  return (
    <View>
      {
        menuItems.map((menuItem) => {
          return (
            <Text key={menuItem.id}>{menuItem.name}</Text>
          );
        })
      }
      <Button title="Order" onPress={() => {
        dispatch(loadMenuItems());
        //navigation.navigate("OrderScreen");
      }} />
    </View>
  );
};

export default MenuScreen;
