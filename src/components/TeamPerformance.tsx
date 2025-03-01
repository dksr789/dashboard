import React from 'react';

const TeamPerformance: React.FC = () => {
  return (
    <div className="team-performance-card">
      <div className="team-performance-header">
        <div>
          <h3>Team Performance Overview</h3>
          <p>Agents from all channels</p>
        </div>
        <div className="period-selector">
          <span className="period">Month</span>
          <span className="period active">Week</span>
        </div>
      </div>
      
      <div className="bubble-chart">
        {/* This would be implemented with d3.js or recharts in a real application */}
        <div className="bubble blue" style={{ left: '20%', top: '60%', width: '80px', height: '80px' }}></div>
        <div className="bubble green" style={{ left: '40%', top: '50%', width: '90px', height: '90px' }}></div>
        <div className="bubble yellow" style={{ left: '47%', top: '30%', width: '70px', height: '70px' }}></div>
        <div className="bubble purple" style={{ left: '60%', top: '30%', width: '100px', height: '100px' }}></div>
        <div className="bubble red" style={{ left: '55%', top: '70%', width: '60px', height: '60px' }}></div>
        <div className="bubble teal" style={{ left: '70%', top: '70%', width: '70px', height: '70px' }}></div>
      </div>
    </div>
  );
};

export default TeamPerformance;