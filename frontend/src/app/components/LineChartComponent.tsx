"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,  // To display the data points
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components required for the Line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/line-chart-data')
      .then((response) => {
        const { labels, data } = response.data;
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Line Chart',
              data: data,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
              fill: true,
              tension: 0.4,  // For smooth line curves
            }
          ]
        });
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error fetching the line chart data!', error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : chartData ? (
        <Line 
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: false,
              },
            },
            scales: {
              x: {
                type: 'category',
              },
              y: {
                beginAtZero: true
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

export default LineChartComponent;