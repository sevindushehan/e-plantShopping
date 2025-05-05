import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    cart: cartReducer, // Define the cart slice in the store
  },
});

export default store; // Export the store for use in the app (e.g., in <Provider store={store}>)
