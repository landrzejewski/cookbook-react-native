import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { openDatabase } from 'react-native-sqlite-storage'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    menuItems: []
  },
  reducers: {
    refreshMenuItems: (state, action) => {
      state.menuItems = action.payload;
    }
  }
});

export const { refreshMenuItems } = restaurantSlice.actions;

export const selectMenuItems = (state) => state.restaurant.menuItems;

export default restaurantSlice.reducer;

export const loadMenuItems = () => async (dispatch) => {
  const response = await axios.get("https://raw.githubusercontent.com/landrzejewski/cookbook-react-native/main/extras/food-data.json");
  saveMenuItemsToDatabase(response.data);
  loadMenuItemsFromDatabase();
  dispatch(refreshMenuItems(response.data));
};

const db = openDatabase({name: 'restaurant.db'});

const saveMenuItemsToDatabase = (items) => {
  db.transaction((tx) => {
    tx.executeSql('create table if not exists menu_items (id integer primary key, name text, description text, price real, imageUrl text)');
    tx.executeSql('delete from menu_items');
    items.forEach((item) => {
      const parameters = [item.id, item.name, item.description, item.price, item.imageUrl];
      tx.executeSql('insert  into menu_items (id, name, description, price, imageUrl) values (?, ?, ?, ?, ?)', parameters);
    }, (error) => console.log(error));
  });
};

const loadMenuItemsFromDatabase = () => {
  db.transaction((tx) => tx.executeSql('select * from menu_items', [], (tx, results) => {
    console.log(results.rows);
  }, (error) => console.log(error)));
}
