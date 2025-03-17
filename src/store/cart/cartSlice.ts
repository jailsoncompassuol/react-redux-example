import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  count: number;
  subTotal: number;
  tax: number;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  imageURL: string;
  qtd: number;
  price: number;
  color: string;
  size: string;
}

const initialState: CartState = {
  count: 0,
  subTotal: 0,
  tax: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      const item = state.items[index];

      state.count = state.count + action.payload.qtd;
      state.subTotal =
        state.subTotal + action.payload.price * action.payload.qtd;

      if (item) {
        state.items[index].qtd = item.qtd + action.payload.qtd;
        return;
      }

      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count = state.count - item!.qtd;
      state.subTotal = state.subTotal - item!.price * item!.qtd;
    },
    incrementQtdItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items[index];
      item!.qtd = item!.qtd + 1;
      state.count = state.count + 1;
      state.subTotal = state.subTotal + item!.price;
      state.items[index] = item!;
    },
    decrementQtdItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items[index];
      if (item!.qtd > 1) {
        item!.qtd = item!.qtd - 1;
        state.count = state.count - 1;
        state.subTotal = state.subTotal - item!.price;
        state.items[index] = item!;
      }
    },
    updateTax: (state, action: PayloadAction<number>) => {
      state.tax = action.payload;
    },
  },
});
