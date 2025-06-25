"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductProps } from "@/entites/product/model/types";

interface SearchResultsListProps {
  searchResults: ProductProps[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  onProductClick: () => void;
}

export default function SearchProductList({ searchResults, isLoading, error, searchQuery, onProductClick }: SearchResultsListProps) {
  if (isLoading && searchQuery.length >= 2) {
    return <p>Searching...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (searchResults.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 flex-1 overflow-y-auto">
      {searchResults.map(product => (
        <li key={product.id}>
          <Link
            href={`/product/${encodeURIComponent(product.id)}`}
            className="flex items-center p-3 hover:bg-gray-100 transition-colors"
            onClick={onProductClick}
          >
            <div className="relative w-12 h-12 mr-3 flex-shrink-0">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="48px"
                className="object-contain rounded-md"
                unoptimized
              />
            </div>
            <div className="flex-grow">
              <p className="text-base font-medium text-gray-800 line-clamp-2">{product.title}</p>
              <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
