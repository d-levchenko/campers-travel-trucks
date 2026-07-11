'use client';

import { useSearchParams } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  location: string;
  engine: string;
  form: string;
  transmission: string;
}

const initialFilters: Filters = {
  location: '',
  engine: '',
  form: '',
  transmission: '',
};

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    location: searchParams.get('location') ?? '',
    engine: searchParams.get('engine') ?? '',
    form: searchParams.get('form') ?? '',
    transmission: searchParams.get('transmission') ?? '',
  });

  const clearFilters = () => setFilters(initialFilters);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilters must be inside FilterProvider');
  }

  return context;
};

export default FilterProvider;
