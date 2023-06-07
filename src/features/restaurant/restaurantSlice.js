import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { openDatabase } from "react-native-sqlite-storage";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    menuItems: []
  },
  reducers: {
    refreshMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
  },
});

export const { refreshMenuItems } = restaurantSlice.actions;

export const selectMenuItems = (state) => state.restaurant.menuItems;

export default restaurantSlice.reducer;

export const loadMenuItems = () => async (dispatch) => {
  //loadMenuItemsFromDatabase((menuItems) => dispatch(refreshMenuItems(menuItems)));
  //const response = await axios.get("https://raw.githubusercontent.com/landrzejewski/cookbook-react-native/main/extras/food-data.json");
  const response = await axios.get("https://food-app.loca.lt/menu-items");
  dispatch(refreshMenuItems(response.data));
  saveMenuItemsToDatabase(response.data);
};

// SQLite

const db = openDatabase({ name: "restaurant.db" });
db.transaction((tx) => tx.executeSql("create table if not exists menu_items (id integer primary key, name text, description text, price real, imageUrl text)"));

const saveMenuItemsToDatabase = (items) => {
  db.transaction((tx) => {
    tx.executeSql("delete from menu_items");
    items.forEach((item) => {
      const parameters = [item.id, item.name, item.description, item.price, item.imageUrl];
      tx.executeSql("insert  into menu_items (id, name, description, price, imageUrl) values (?, ?, ?, ?, ?)", parameters);
    }, (error) => console.log(error));
  });
};

const loadMenuItemsFromDatabase = (callback) => {
  db.transaction((tx) => tx.executeSql("select * from menu_items", [], (tx, results) => {
    const rowsCount = results.rows.length;
    const menuItems = [];
    for (let i = 0; i < rowsCount; i++) {
      menuItems.push(results.rows.item(i));
    }
    callback(menuItems)
  }, (error) => console.log(error)));
};
