import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductProps } from '@/entites/product/model/types';

export const fetchProducts = createAsyncThunk(
  'products/fetch', 
  async () => {
    const res = await fetch('https://fakestoreapi.in/api/products?limit=150');
    const data = await res.json();
    if (data.status !== 'SUCCESS') throw new Error(data.message);
    return data.products as ProductProps[];
});

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category: string) => {
    const res = await fetch(`https://fakestoreapi.in/api/products/category?type=${category}`);
    const data = await res.json();
    if (data.status !== "SUCCESS") throw new Error(data.message);
    return data.products as ProductProps[];
  }
);

interface ProductsState {
  products: ProductProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch products.';
        state.isLoading = false;
      })

      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch category products';
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
