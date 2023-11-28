import { IProductItem } from './../types/product';
import { IProductItem } from "@/types/product";
import { createAction, createSlice } from "@reduxjs/toolkit";


interface CartState {
  items: IProductItem[];
}

const initialState: CartState = {
  items: [],
};
// export const removeFromCart = createAction('cart/removeFromCart', (id: number) => ({
//   payload: id,
// }));

// export const updateCart = createAction('cart/updateCart', (items: IProductItem[]) => ({
//   payload: items,
// }));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: any }) => {
      console.log(action.payload)
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
