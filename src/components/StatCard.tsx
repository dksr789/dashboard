import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface StatCardProps {
  value: number;
  label: string;
  trend: 'up' | 'down' | 'none';
  percentage: string;
  chart?: 'bar';
  avatars?: boolean;
  progress?: {
    current: number;
    goal: number;
    percentage: number;
  };
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  trend, 
  percentage, 
  chart,
  avatars,
  progress
}) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-value-container">
          <div className="stat-value">{value.toLocaleString()}</div>
          {trend !== 'none' && (
            <div className={`stat-trend ${trend === 'up' ? 'positive' : 'negative'}`}>
              {trend === 'up' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {percentage}
            </div>
          )}
        </div>
        <div className="stat-label">{label}</div>
      </div>
      
      <div className="stat-content">
        {chart === 'bar' && (
          <div className="chart-container">
            <div className="bar-chart">
              <div className="bar" style={{ height: '40px' }}></div>
              <div className="bar" style={{ height: '80px' }}></div>
              <div className="bar" style={{ height: '30px' }}></div>
              <div className="bar" style={{ height: '100px' }}></div>
              <div className="bar" style={{ height: '20px' }}></div>
              <div className="bar" style={{ height: '70px' }}></div>
              <div className="bar" style={{ height: '50px' }}></div>
            </div>
          </div>
        )}
        
        {avatars && (
          <div className="avatar-group">
            <div className="avatar"><img src="/avatar1.png" alt="User 1" /></div>
            <div className="avatar"><img src="/avatar2.png" alt="User 2" /></div>
            <div className="avatar"><img src="/avatar3.png" alt="User 3" /></div>
            <div className="avatar-count">+42</div>
          </div>
        )}
        
        {progress && (
          <div className="progress-container">
            <div className="progress-text">
              {progress.current.toLocaleString()} to Goal
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
            <div className="progress-percentage">{progress.percentage}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;