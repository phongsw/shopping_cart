import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

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
  },
});

export const { setTotalPrice } = totalStateSlice.actions;

export const selectTotalPrice = (state: RootState) => state.totalPrice.totalPrice;

export default totalStateSlice.reducer;
