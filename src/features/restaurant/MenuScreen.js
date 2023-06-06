import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <ScrollView>
      {
        menuItems.map((menuItem) => {
          return (
            <View key={menuItem.id} style={styles.row}>
              <Image source={{ uri: menuItem.imageUrl }} style={styles.image} />
              <View style={styles.section}>
                <View style={styles.info}>
                  <Text style={styles.title}>{menuItem.name}</Text>
                  <Text>{menuItem.description}</Text>
                  <Text>Price: ${menuItem.price}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      }
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderColor: 'lightgray',
    borderWidth: 1
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 12,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 5,
    color: "white",
    fontSize: 11,
  }
});
