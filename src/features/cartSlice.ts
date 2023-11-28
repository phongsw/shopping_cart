import { IProductItem } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";


interface CartState {
  items: IProductItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: IProductItem }) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: { payload: number }) => {
      const { payload } = action;
      state.items = state.items.filter((item) => item.id !== payload);
    },
    updateCart: (state, action: { payload: IProductItem[] }) => {
      const { payload } = action
      state.items = payload
    }
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
