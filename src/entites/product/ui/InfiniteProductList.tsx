"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { ProductProps } from "../model/types";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from './ProductCardSkeleton';

interface InfiniteProductListProps {
  initialProducts: ProductProps[];
}

const PRODUCTS_PER_PAGE = 20;

export default function InfiniteProductList({ initialProducts }: InfiniteProductListProps) {
  const [visibleProductsCount, setVisibleProductsCount] = useState(PRODUCTS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement>(null);

  const productsToRender = initialProducts.slice(0, visibleProductsCount);

  const loadMoreVisibleProducts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const nextCount = visibleProductsCount + PRODUCTS_PER_PAGE;

      if (nextCount >= initialProducts.length) {
        setVisibleProductsCount(initialProducts.length);
        setHasMore(false);
      } else {
        setVisibleProductsCount(nextCount);
      }
      setLoading(false);
    }, 100);
  }, [loading, hasMore, visibleProductsCount, initialProducts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        loadMoreVisibleProducts();
      }
    }, {
      rootMargin: '200px',
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading, loadMoreVisibleProducts]);

  useEffect(() => {
    if (initialProducts.length <= PRODUCTS_PER_PAGE) {
      setHasMore(false);
    }
  }, [initialProducts.length]);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsToRender.map((product) => (
          <li key={product.id} className="w-full">
            <ProductCard product={product} />
          </li>
        ))}

        {loading && hasMore &&
          Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
            <li key={`skeleton-${index + visibleProductsCount}`} className="w-full">
              <ProductCardSkeleton />
            </li>
          ))}
      </ul>

      {hasMore && (
        <div ref={loaderRef}>
          {loading && (
            <p>Loading...</p>
          )}
        </div>
      )}
    </>
  );
}