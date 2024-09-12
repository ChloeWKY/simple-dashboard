import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('renders the Dashboard with multiple charts', () => {
    render(<Dashboard />);

    // Check for multiple chart titles to ensure they are rendered
    expect(screen.getByText('Candlestick Chart')).toBeInTheDocument();
    expect(screen.getByText('Line Chart')).toBeInTheDocument();
    expect(screen.getByText('Bar Chart')).toBeInTheDocument();
    expect(screen.getByText('Pie Chart')).toBeInTheDocument();
  });
});