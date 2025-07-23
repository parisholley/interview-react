import React, { useEffect } from 'react';

interface DashboardData {
  sales: number[];
  customers: number[];
  revenue: number[];
}

interface Props {
  data: DashboardData;
}

const DataChart: React.FC<Props> = ({ data }) => {
  // This effect also contributes to the render issue
  useEffect(() => {
    console.log('Chart effect running - rendering chart');
    // Chart rendering logic
  }, [data]); // This is actually correct, but adds to the console noise

  return (
    <div>
      <h3>Sales Chart</h3>
      <div>Sales: {data.sales.join(', ')}</div>
      <div>Customers: {data.customers.join(', ')}</div>
      <div>Revenue: {data.revenue.join(', ')}</div>
    </div>
  );
};

export default DataChart;
