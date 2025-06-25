import { ProductProps } from "@/entites/product/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: ProductProps[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action: PayloadAction<ProductProps[]>) => {
      state.items = action.payload;
    },

    addToWishlist: (state, action: PayloadAction<ProductProps>) => {
      const productToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === productToAdd.id);

      if (!existingItem) {
        state.items.push(productToAdd);
      }
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { setWishlist, addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;