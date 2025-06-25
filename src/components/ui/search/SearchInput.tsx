"use client";

import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  value: string;
  onChange: (query: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Type to search..."
        value={value}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-lg"
        autoFocus={false}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
    </div>
  );
}