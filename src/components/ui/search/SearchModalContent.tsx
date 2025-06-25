"use client";

import React from 'react';
import { useProductSearch } from '@/hooks/useProductSearch';
import SearchInput from '@/components/ui/search/SearchInput';
import SearchProductList from './SearchProductList';

interface SearchModalProps {
  onProductClick: () => void;
}

export default function SearchModal({ onProductClick }: SearchModalProps) {
  const { 
    searchQuery, 
    handleQueryChange, 
    searchResults, 
    isLoading, 
    error 
  } = useProductSearch('');

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>
      <SearchInput value={searchQuery} onChange={handleQueryChange} />
      <SearchProductList 
        searchResults={searchResults} 
        isLoading={isLoading} 
        error={error} 
        searchQuery={searchQuery}
        onProductClick={onProductClick} 
      />
    </div>
  );
}