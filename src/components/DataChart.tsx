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
  useEffect(() => {
    console.log('Chart effect running - rendering chart');
  }, [data]);

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
