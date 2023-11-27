import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface totalPriceState {
  totalPrice: number;
}

const initialState: totalPriceState = {
  totalPrice: 0,
};

const totalStateSlice = createSlice({
  name: "totalState",
  initialState,
  reducers: {
    setTotalPrice(state, action: { payload: number }) {
      state.totalPrice = action.payload;
    },
  },
});

export const { setTotalPrice } = totalStateSlice.actions;

export const selectTotalPrice = (state: RootState) => state.totalPrice.totalPrice;

export default totalStateSlice.reducer;
