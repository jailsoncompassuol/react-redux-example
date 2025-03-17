import { PayloadAction } from "@reduxjs/toolkit";
import { CartCleamState } from "../types/CartState";

export const incrementQtdItem = (
  state: CartCleamState,
  action: PayloadAction<string>
) => {
  const index = state.items.findIndex((item) => item.id === action.payload);
  const item = state.items[index];
  item!.qtd = item!.qtd + 1;
  state.count = state.count + 1;
  state.subTotal = state.subTotal + item!.price;
  state.items[index] = item!;
};
