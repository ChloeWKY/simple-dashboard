import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import LineChartComponent from './LineChartComponent';
import { act } from 'react-dom/test-utils';

test('renders LineChartComponent and shows loading initially', async () => {
  await act(async () => {
    render(<LineChartComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

test('displays Line Chart title when data is loaded', async () => {
  await act(async () => {
    render(<LineChartComponent />);
    await waitFor(() => {
      expect(screen.getByText('Line Chart')).toBeInTheDocument();
    });
  });
});