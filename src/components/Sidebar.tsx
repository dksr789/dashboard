import React, { useState } from 'react';
import {
    Home,
    Users,
    FileText,
    DollarSign,
    Users as UsersGroup,
    BarChart2,
    Link,
    Film,
    Settings,
    HelpCircle,
    ChevronDown
} from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    // State to manage sidebar collapse
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-content">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="collapse-button"
                    style={{ color: '#fff' }} // Set the color of the button to #fff
                >
                    {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
                </button>


                <div className="sidebar-section">
                    <h2 className={`section-title ${collapsed ? 'collapsed' : ''}`}>NAVIGATION</h2>
                    <ul className={`nav-list ${collapsed ? 'collapsed' : ''}`}>
                        <li className="nav-item active">
                            <Home size={20} />
                            {!collapsed && <span>Dashboard</span>}
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-header">
                                <Users size={20} />
                                {!collapsed && <span>Admin Board</span>}
                                <ChevronDown size={16} className="dropdown-icon" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <FileText size={20} />
                            {!collapsed && <span>Leads</span>}
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-header">
                                <Users size={20} />
                                {!collapsed && <span>Account & Contact</span>}
                                <ChevronDown size={16} className="dropdown-icon" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <DollarSign size={20} />
                            {!collapsed && <span>Deals</span>}
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-header">
                                <UsersGroup size={20} />
                                {!collapsed && <span>Partners</span>}
                                <ChevronDown size={16} className="dropdown-icon" />
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-header">
                                <BarChart2 size={20} />
                                {!collapsed && <span>Reports & Analytics</span>}
                                <ChevronDown size={16} className="dropdown-icon" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link size={20} />
                            {!collapsed && <span>Integration</span>}
                        </li>
                        <li className="nav-item">
                            <Film size={20} />
                            {!collapsed && <span>Media Library</span>}
                        </li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2 className={`section-title ${collapsed ? 'collapsed' : ''}`}>MANAGE</h2>
                    <ul className={`nav-list ${collapsed ? 'collapsed' : ''}`}>
                        <li className="nav-item">
                            <Settings size={20} />
                            {!collapsed && <span>Settings</span>}
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-header">
                                <HelpCircle size={20} />
                                {!collapsed && <span>Help</span>}
                                <ChevronDown size={16} className="dropdown-icon" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
