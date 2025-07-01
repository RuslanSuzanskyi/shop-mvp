"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/features/products/productsSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { selectProducts } from "@/features/products/productsSelectors";

const PAGE_SIZE = 10;

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useSelector(selectProducts);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        visibleCount < products.length
      ) {
        setVisibleCount((count) => count + PAGE_SIZE);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleCount, products.length]);

  if (isLoading) {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <li key={index}>
            <ProductCardSkeleton />
          </li>
        ))}
      </ul>
    );
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.slice(0, visibleCount).map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
