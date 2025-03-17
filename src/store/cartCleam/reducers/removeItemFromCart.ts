import { PayloadAction } from "@reduxjs/toolkit";
import { CartCleamState } from "../types/CartState";

export const removeItemFromCart = (
  state: CartCleamState,
  action: PayloadAction<string>
) => {
  const item = state.items.find((item) => item.id === action.payload);
  state.items = state.items.filter((item) => item.id !== action.payload);
  state.count = state.count - item!.qtd;
  state.subTotal = state.subTotal - item!.price * item!.qtd;
};
