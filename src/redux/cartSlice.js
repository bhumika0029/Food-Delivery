import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1; // just increment directly
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    IncrementItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    DecrementItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // remove if quantity becomes 0
          return state.filter((i) => i.id !== action.payload);
        }
      }
    },
    
  },
});

export const { AddItem, RemoveItem, IncrementItem, DecrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
