import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const LeadSourcesSection: React.FC = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h3>Lead sources</h3>
        <p className="section-subheader">Most Leads comes from</p>
      </div>
      
      <div className="section-content">
        <div className="lead-source-row">
          <div className="lead-source-name">manual input</div>
          <div className="lead-source-value positive">
            <span>7.8</span>/10
            <ChevronUp size={16} />
          </div>
        </div>
        
        <div className="lead-source-row">
          <div className="lead-source-name">portal</div>
          <div className="lead-source-value negative">
            <span>730k</span>
            <ChevronDown size={16} />
          </div>
        </div>
        
        <div className="lead-source-row">
          <div className="lead-source-name">partner</div>
          <div className="lead-source-value positive">
            <span>$2.09</span>
            <ChevronUp size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSourcesSection;