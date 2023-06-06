import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadMenuItems, selectMenuItems } from "./restaurantSlice";
import { useEffect } from "react";

const MenuScreen = ({ navigation }) => {
  const menuItems = useSelector(selectMenuItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMenuItems());
  }, []);
  return (
    <View>
      {
        menuItems.map((menuItem) => {
          return (
            <Text key={menuItem.id}>{menuItem.name}</Text>
          );
        })
      }
    </View>
  );
};

export default MenuScreen;
