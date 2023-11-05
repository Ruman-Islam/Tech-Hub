import { IProduct } from "@/interfaces/common";
import { createSlice } from "@reduxjs/toolkit";

interface IPCProduct {
  monitor?: IProduct;
  motherboard?: IProduct;
  power_supply?: IProduct;
  processor?: IProduct;
  ram?: IProduct;
  storage?: IProduct;
}

interface RootState {
  pc: IPCProduct;
  // Add other slices as needed
}

const initialState: RootState = {
  pc: {},
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      if (action?.payload?.category.includes("power_supply")) {
        state.pc = {
          ...state.pc,
          ["power_supply"]: action?.payload,
        };
      } else {
        state.pc = {
          ...state.pc,
          [action?.payload?.category]: action?.payload,
        };
      }
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
