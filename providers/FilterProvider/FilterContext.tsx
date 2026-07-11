'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  location: string;
  engine: string;
  form: string;
  transmission: string;
}

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

interface FilterProviderProps {
  children: ReactNode;
  initialFilters: Filters;
}

const FilterProvider = ({ children, initialFilters }: FilterProviderProps) => {
  const [filters, setFilters] = useState(initialFilters);

  const clearFilters = () =>
    setFilters({
      location: '',
      engine: '',
      form: '',
      transmission: '',
    });

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
