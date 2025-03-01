import React from 'react';

const BarChart: React.FC = () => {
  return (
    <div className="bar-chart">
      <div className="bar-container">
        <div className="bar" style={{ height: '30%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '95%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '35%' }}></div>
        <div className="bar" style={{ height: '65%' }}></div>
      </div>
    </div>
  );
};

export default BarChart;