"use client";

import React from 'react';
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

// Register the components and scales for the chart
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
              label: 'Product A', // First legend entry
              data: [data[0], 0, 0],  // Only data for Product A
              backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Light green
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Product B', // Second legend entry
              data: [0, data[1], 0],  // Only data for Product B
              backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Light blue
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Product C', // Third legend entry
              data: [0, 0, data[2]],  // Only data for Product C
              backgroundColor: 'rgba(255, 206, 86, 0.2)',  // Light yellow
              borderColor: 'rgba(255, 206, 86, 1)',
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
        <p className="text-red-500">{error}</p>
      ) : chartData ? (
        <Bar data={chartData} options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              type: 'category',  // This ensures the 'category' scale is used for the x-axis
            },
            y: {
              beginAtZero: true // Ensure y-axis starts at zero
            },
          },
        }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChartComponent;