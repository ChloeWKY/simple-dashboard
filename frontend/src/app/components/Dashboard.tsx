import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard with Charts</h1>
      <div>
        <h2>Line Chart</h2>
        <LineChartComponent />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <BarChartComponent />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;