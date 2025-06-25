import { useState, useEffect } from 'react';
import { fetchProducts } from '@/features/products/productsSlice';
import { useDebounce } from './useDebounce';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/lib/store';
import { ProductProps } from '@/entites/product/model/types';

export function useProductSearch(initialQuery = '') {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, error } = useSelector((state: RootState) => state.products);

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);
  const debouncedQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (debouncedQuery.length < 1) {
      setSearchResults([]);
      return;
    }

    const lower = debouncedQuery.toLowerCase();
    const results = products.filter((p: ProductProps) =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
    setSearchResults(results);
  }, [debouncedQuery, products]);

  return {
    searchQuery,
    handleQueryChange: setSearchQuery,
    searchResults,
    isLoading,
    error,
  };
}
