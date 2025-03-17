import { createSlice } from "@reduxjs/toolkit";
import { CartCleamState } from "./types/CartState";
import { addItemToCart } from "./reducers/addItemToCart";
import { removeItemFromCart } from "./reducers/removeItemFromCart";
import { incrementQtdItem } from "./reducers/incrementQtdItem";
import { decrementQtdItem } from "./reducers/decrementQtdItem";
import { updateTax } from "./reducers/updateTax";

const initialState: CartCleamState = {
  count: 0,
  subTotal: 0,
  tax: 3,
  items: [],
};

export const cartCleamSlice = createSlice({
  name: "cartCleam",
  initialState,
  reducers: {
    addItemToCart,
    removeItemFromCart,
    incrementQtdItem,
    decrementQtdItem,
    updateTax,
  },
});

export const cartCleamActions = cartCleamSlice.actions;
