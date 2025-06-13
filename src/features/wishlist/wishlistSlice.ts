import { ProductProps } from "@/entites/product/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: ProductProps[];
}

const initialState: WishlistState = {
  items: [],
};

const loadWishlistFromLocalStorage = (): ProductProps[] => {
  if (typeof window !== 'undefined') {
    try {
      const serializedWishlist = localStorage.getItem('wishlist');
      if (serializedWishlist === null) {
        return [];
      }
      return JSON.parse(serializedWishlist) as ProductProps[];
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
      return [];
    }
  }
  return [];
};

const saveWishlistToLocalStorage = (wishlistItems: ProductProps[]) => {
  if (typeof window !== 'undefined') {
    try {
      const serializedWishlist = JSON.stringify(wishlistItems);
      localStorage.setItem('wishlist', serializedWishlist);
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: loadWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductProps>) => {
      const productToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === productToAdd.id);

      if (!existingItem) {
        state.items.push(productToAdd);
        saveWishlistToLocalStorage(state.items);
      }
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },

    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;