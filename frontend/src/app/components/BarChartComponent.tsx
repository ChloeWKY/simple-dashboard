"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, // This is the scale used for x-axis categories
  LinearScale,   // Scale for linear data (y-axis)
  BarElement,    // Bar element used in bar charts
  Title,         // Optional plugin for chart titles
  Tooltip,       // Plugin for tooltips
  Legend         // Plugin for legend
} from 'chart.js';

// Register the components and scales you need for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bar-chart-data')
      .then((response) => {
        const { labels, data } = response.data;
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Bar Chart',
              data: data,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1,
            }
          ]
        });
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error fetching the bar chart data!', error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : chartData ? (
        <Bar data={chartData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Dynamic Bar Chart'
            },
          },
          scales: {
            x: {
              type: 'category',  // This ensures the 'category' scale is used for the x-axis
            },
            y: {
              beginAtZero: true // Ensure y-axis starts at zero
            }
          }
        }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChartComponent;