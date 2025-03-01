import React from 'react';

const AdCampaigns: React.FC = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <div>
          <h3>ad Campaigns</h3>
          <p>75% activity growth</p>
        </div>
        <div className="card-action">
          <div className="icon-button">+</div>
        </div>
      </div>
      
      <div className="section-content">
        <div className="campaign-table">
          <div className="campaign-table-header">
            <div className="campaign-column">CAMPAIGN TITLE</div>
            <div className="campaign-column">STATUS</div>
            <div className="campaign-column">CONVERSION</div>
          </div>
          
          <div className="campaign-row">
            <div className="campaign-column">Best Rated Headsets of 2022</div>
            <div className="campaign-column"><span className="status-badge success">Sent</span></div>
            <div className="campaign-column">18%(6.4k)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCampaigns;