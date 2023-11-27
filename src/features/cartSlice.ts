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
    addToCart: (state, action: { payload: { id: number } }) => {
      const { id } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action: { payload: number }) => {
      const { payload } = action;

      const item = state.items.find((item) => item.id === payload);

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: { payload: number }) => {
      const { payload } = action;

      const item = state.items.find((item) => item.id === payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter((item) => item.id !== payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
