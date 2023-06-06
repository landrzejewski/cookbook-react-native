import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

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

export const loadMenuItems = (amount) => (dispatch) => {
  axios.get("https://raw.githubusercontent.com/landrzejewski/cookbook-react-native/main/extras/food-data.json")
    .then(({data}) => console.log(data));
   // .then((menuItems) => dispatch(loadMenuItems(menuItems)));
};
