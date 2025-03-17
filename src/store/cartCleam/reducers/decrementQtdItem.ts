import { PayloadAction } from "@reduxjs/toolkit";
import { CartCleamState } from "../types/CartState";

export const decrementQtdItem = (
  state: CartCleamState,
  action: PayloadAction<string>
) => {
  const index = state.items.findIndex((item) => item.id === action.payload);
  const item = state.items[index];
  if (item!.qtd > 1) {
    item!.qtd = item!.qtd - 1;
    state.count = state.count - 1;
    state.subTotal = state.subTotal - item!.price;
    state.items[index] = item!;
  }
};
