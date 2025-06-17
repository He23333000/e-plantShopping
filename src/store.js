// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Make sure the path is correct

// Create the Redux store with cart slice
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;