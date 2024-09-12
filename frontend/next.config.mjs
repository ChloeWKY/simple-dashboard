/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/candlestick-data',
          destination: 'http://127.0.0.1:8000/api/candlestick-data',
        },
        {
          source: '/api/line-chart-data',
          destination: 'http://127.0.0.1:8000/api/line-chart-data',
        },
        {
            source: '/api/bar-chart-data',
            destination: 'http://127.0.0.1:8000/api/bar-chart-data',
        },
        {
            source: '/api/pie-chart-data',
            destination: 'http://127.0.0.1:8000/api/pie-chart-data',
        },
      ];
    },
  };
  
  export default nextConfig;