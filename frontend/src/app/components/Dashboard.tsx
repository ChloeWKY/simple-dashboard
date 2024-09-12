import React from 'react';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import CandlestickChartComponent from './CandlestickChartComponent';

const Dashboard = () => {
  return (
    <div className="p-8">
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Candlestick Chart</h3>
        <CandlestickChartComponent />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Line Chart</h3>
        <LineChartComponent />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Bar Chart</h3>
        <BarChartComponent />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Pie Chart</h3>
        <PieChartComponent />
      </section>
    </div>
  );
};

export default Dashboard;