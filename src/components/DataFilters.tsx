import React from 'react';

interface Filters {
  dateRange: string;
  category: string;
}

interface Props {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const DataFilters: React.FC<Props> = ({ filters, onFiltersChange }) => {
  return (
    <div>
      <label>
        Date Range:
        <select 
          value={filters.dateRange} 
          onChange={(e) => onFiltersChange({ ...filters, dateRange: e.target.value })}
        >
          <option value="7d">7 days</option>
          <option value="30d">30 days</option>
          <option value="90d">90 days</option>
        </select>
      </label>
      
      <label>
        Category:
        <select 
          value={filters.category}
          onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </label>
    </div>
  );
};

export default DataFilters;
