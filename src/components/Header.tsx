import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="welcome-header">
      <div className="welcome-content">
        <div className="welcome-text">
          <h1>Good Morning, User</h1>
          <p>Here's your today's gist!</p>
        </div>
      </div>
      
      <div className="stat-cards-container">
        <div className="stat-card-mini">
          <div className="stat-number-container">
            <div className="stat-number">10</div>
            <div className="stat-trend positive">↑ 9.2%</div>
          </div>
          <div className="stat-label">New Leads</div>
        </div>
        
        <div className="stat-card-mini">
          <div className="stat-number-container">
            <div className="stat-number">25</div>
            <div className="stat-trend negative">↑ 0.4%</div>
          </div>
          <div className="stat-label">Follow ups</div>
        </div>
      </div>
    </div>
  );
};

export default Header;