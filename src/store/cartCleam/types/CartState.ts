import { CartCleamItem } from "./CartCleamItem";

export interface CartCleamState {
  items: CartCleamItem[];
  count: number;
  subTotal: number;
  tax: number;
}
