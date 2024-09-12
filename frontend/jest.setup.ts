import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Mock Axios requests
const mock = new MockAdapter(axios);

beforeEach(() => {
    fetchMock.resetMocks();
    mock.reset(); // Reset Axios mock before each test
  });

// Add your mock endpoints here
mock.onGet('http://127.0.0.1:8000/api/line-chart-data').reply(200, {
  // Sample mock data for line chart
  data: [
    { time: '2023-09-01', value: 100 },
    { time: '2023-09-02', value: 110 },
  ],
});

mock.onGet('http://127.0.0.1:8000/api/bar-chart-data').reply(200, {
  // Sample mock data for bar chart
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      data: [65, 59, 80],
    },
  ],
});

// Mock `window.matchMedia`
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};