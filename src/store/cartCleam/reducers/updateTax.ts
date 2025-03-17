import { PayloadAction } from "@reduxjs/toolkit";
import { CartCleamState } from "../types/CartState";

export const updateTax = (
  state: CartCleamState,
  action: PayloadAction<number>
) => {
  state.tax = action.payload;
};
