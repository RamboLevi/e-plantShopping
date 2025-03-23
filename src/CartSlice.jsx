import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds an item or increases quantity if it exists
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    
    // Removes an item from the cart by name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Updates the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// Exporting actions for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Exporting reducer for store.js
export default cartSlice.reducer;
