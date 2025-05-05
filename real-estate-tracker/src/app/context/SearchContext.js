"use client"
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [filters, setFilters] = useState({
    city: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: 'Any',
  });

  return (
    <SearchContext.Provider value={{ filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}