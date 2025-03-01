import React from 'react';
import { Search, Bell, Settings, ChevronUp, ChevronDown } from 'lucide-react';
import Header from './Header';
import StatCard from './StatCard';
import PartnerSection from './PartnerSection';
import LeadSourcesSection from './LeadSourcesSection';
import TeamPerformance from './TeamPerformance';
import AdCampaigns from './AdCampaigns';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-title">Dashboard</div>
        <div className="header-actions">
          <div className="search-icon">
            <Search size={20} />
          </div>
          <div className="notification-icon">
            <Bell size={20} />
          </div>
          <div className="settings-icon">
            <Settings size={20} />
          </div>
          <div className="user-avatar">
            <img src="/avatar.svg" alt="User" />
          </div>
        </div>
      </div>

      <div className="breadcrumb">
        Home &gt; Dashboard
      </div>

      {/* Main content layout with side-by-side sections */}
      <div className="main-dashboard-content">
        {/* Left side - Welcome header */}
        <div className="dashboard-left">
          <div className="welcome-header">
            <div className="welcome-text">
              <h1>Good Morning, User</h1>
              <p>Here's your today's gist!</p>
            </div>
            <div className="quick-stats">
              <div className="stat-box">
                <div className="stat-value">
                  <span className="stat-number">10</span>
                  <span className="stat-trend positive">↑ 9.2%</span>
                </div>
                <div className="stat-label">New Leads</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">
                  <span className="stat-number">25</span>
                  <span className="stat-trend negative">↑ 0.4%</span>
                </div>
                <div className="stat-label">Follow ups</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Stat cards */}
        <div className="dashboard-right">
          <div className="stats-section">
            <div className="stats-row">
              <StatCard 
                value={24} 
                label="Average Daily Leads" 
                trend="up" 
                percentage="9.2%" 
                chart="bar"
                // avatars={true}
              />
              <StatCard 
                value={16} 
                label="Your Leads" 
                trend="up" 
                percentage="9.2%" 
                avatars={true}
                progress={{ current: 1048, goal: 1700, percentage: 62 }}
              />
              <StatCard 
                value={12} 
                label="Junk Leads" 
                trend="down" 
                percentage="0.4%" 
                progress={{ current: 1048, goal: 1700, percentage: 62 }}
              />
            </div>

            <div className="stats-row">
              <StatCard 
                value={2420} 
                label="Total Leads" 
                trend="up" 
                percentage="" 
                chart="bar"
              />
              <StatCard 
                value={28} 
                label="External Leads" 
                trend="up" 
                percentage="9.2%" 
                avatars={true}
                progress={{ current: 1048, goal: 1700, percentage: 62 }}
              />
              <StatCard 
                value={4} 
                label="Lost deals" 
                trend="down" 
                percentage="0.4%"
                progress={{ current: 1048, goal: 1700, percentage: 62 }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom grid remains the same */}
      <div className="dashboard-grid">
        <div className="grid-column">
          <PartnerSection />
          <AdCampaigns />
        </div>
        <div className="grid-column">
          <LeadSourcesSection />
        </div>
        <div className="grid-column">
          <TeamPerformance />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;