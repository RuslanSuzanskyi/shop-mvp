import { RootState } from "@/lib/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) => state.cart.items.length;
export const selectCartTotalCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
