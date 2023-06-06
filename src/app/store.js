import { configureStore  } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import restaurantReducer from "../features/restaurant/restaurantSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    restaurant: restaurantReducer
  }
});
