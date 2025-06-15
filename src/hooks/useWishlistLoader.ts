"use client";

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWishlist } from '@/features/wishlist/wishlistSlice'; 
import { ProductProps } from '@/entites/product/model/types';

export function useWishlistLoader() {
  const dispatch = useDispatch();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const loadFromLocalStorage = (): ProductProps[] => {
      if (typeof window === 'undefined') {
        return [];
      }
      try {
        const serializedWishlist = localStorage.getItem('wishlist');
        if (serializedWishlist === null) {
          return [];
        }
        return JSON.parse(serializedWishlist) as ProductProps[];
      } catch (error) {
        console.error("Failed to load wishlist from localStorage on mount:", error);
        return [];
      }
    };

    dispatch(setWishlist(loadFromLocalStorage()));

    setHasMounted(true);

  }, [dispatch]);

  return hasMounted;
}