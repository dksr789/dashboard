import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const PartnerSection: React.FC = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h3>Partners</h3>
        <p className="section-subheader">Commission Rate</p>
      </div>
      
      <div className="section-content">
        <div className="partner-row">
          <div className="partner-name">Partner 1</div>
          <div className="partner-value positive">
            <span>7.8</span>/10
            <ChevronUp size={16} />
          </div>
        </div>
        
        <div className="partner-row">
          <div className="partner-name">partner 2</div>
          <div className="partner-value negative">
            <span>730k</span>
            <ChevronDown size={16} />
          </div>
        </div>
        
        <div className="partner-row">
          <div className="partner-name">Partner 3</div>
          <div className="partner-value positive">
            <span>$2.09</span>
            <ChevronUp size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;