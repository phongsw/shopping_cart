import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { calculateTotalPrice } from '@/utils/helper';
import { IProductItem } from '@/types/product';


interface TotalPriceState {
  totalPrice: number;
}

const initialState: TotalPriceState = {
  totalPrice: 0,
};

const totalStateSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
    handleQuantityChangeInputRedux(state, action: PayloadAction<{ id: number; quantity: number; cartList: IProductItem[] }>) {
      const { id, quantity, cartList } = action.payload;

      // Ensure quantity is a string before using replace
      const newValue = String(quantity).replace(/[^0-9]/g, '');

      if (+newValue >= 999999) {
        return;
      }

      const newCart = cartList.map((product: IProductItem) =>
        product.id === id ? { ...product, quantity: +newValue } : product
      );
      console.log('newCart', newCart)

      state.totalPrice = calculateTotalPrice(newCart);
    },
  },
});

export const { setTotalPrice, handleQuantityChangeInputRedux } = totalStateSlice.actions;

export const selectTotalPrice = (state: RootState) => state.totalPrice.totalPrice;

export default totalStateSlice.reducer;
