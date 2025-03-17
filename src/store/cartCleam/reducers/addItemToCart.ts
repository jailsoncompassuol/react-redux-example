import { PayloadAction } from "@reduxjs/toolkit";
import { CartCleamState } from "../types/CartState";
import { CartCleamItem } from "../types/CartCleamItem";

export const addItemToCart = (
  state: CartCleamState,
  action: PayloadAction<CartCleamItem>
) => {
  const index = state.items.findIndex(
    (item) =>
      item.productId === action.payload.productId &&
      item.color === action.payload.color &&
      item.size === action.payload.size
  );
  const item = state.items[index];
  if (item) {
    state.items[index].qtd = item.qtd + action.payload.qtd;
    state.count = state.count + action.payload.qtd;
    state.subTotal = state.subTotal + action.payload.price * action.payload.qtd;
    return;
  }
  state.items.push(action.payload);
  state.count = state.count + action.payload.qtd;
  state.subTotal = state.subTotal + action.payload.price * action.payload.qtd;
};
