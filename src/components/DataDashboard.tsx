import React, { useState, useEffect } from 'react';
import DataChart from './DataChart';
import DataFilters from './DataFilters';

interface DashboardData {
  sales: number[];
  customers: number[];
  revenue: number[];
}

const DataDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData>({ sales: [], customers: [], revenue: [] });
  const [filters, setFilters] = useState({ dateRange: '30d', category: 'all' });
  const [loading, setLoading] = useState(false);

  // Challenge: This useEffect has dependency issues causing extra renders
  useEffect(() => {
    console.log('Dashboard effect running - fetching data');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setData({
        sales: [100, 200, 150, 300],
        customers: [50, 75, 60, 90],
        revenue: [1000, 2000, 1500, 3000]
      });
      setLoading(false);
    }, 1000);
  }, [filters.dateRange, filters.category]); // Fixed: Removed 'data' to prevent infinite rerenders

  // Another problematic effect
  useEffect(() => {
    console.log('Data processing effect running');
    // This effect processes data but has the wrong dependencies
    if (data.sales.length > 0) {
      // Some data processing logic
      const processedData = data.sales.map(sale => sale * 1.1);
      console.log('Processed sales data:', processedData);
    }
  }, [data.sales.length]); // Fixed: Only depend on sales array length

  return (
    <div>
      <h1>Data Dashboard</h1>
      {loading && <p>Loading...</p>}
      <DataFilters filters={filters} onFiltersChange={setFilters} />
      <DataChart data={data} />
    </div>
  );
};

export default DataDashboard;
