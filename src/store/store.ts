import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartSlice';
import totalPriceReducer from './totalPriceSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    totalPrice: totalPriceReducer,
    cartList: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
