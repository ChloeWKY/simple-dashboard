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
              fill: true, // You can set this to false if you don't want the area below the line to be filled
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
        <p>{error}</p>
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
                display: true,
                text: 'Dynamic Line Chart'
              },
            },
            scales: {
              x: {
                type: 'category',  // Ensure x-axis uses 'category' scale
              },
              y: {
                beginAtZero: true // Ensure y-axis starts from 0
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