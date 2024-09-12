"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register components for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pie-chart-data')
      .then((response) => {
        const { labels, data } = response.data;
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Pie Chart',
              data: data,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
          ]
        });
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error fetching the pie chart data!', error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : chartData ? (
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                enabled: true
              }
            }
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PieChartComponent;