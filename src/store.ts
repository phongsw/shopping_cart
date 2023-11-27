import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './features/shoppingCartSlice';
import totalPriceReducer from './features/totalPriceSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    totalPrice: totalPriceReducer,
    cartList: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
