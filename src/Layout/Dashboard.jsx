import React from 'react';
import { FaEnvelope, FaHome, FaPaypal, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { GiProgression } from 'react-icons/gi';
import { MdWorkHistory, MdDashboard } from 'react-icons/md';
import { FaMessage } from 'react-icons/fa6';

const Dashboard = () => {
    const [isAdmin] = useAdmin();

    // Define menu items based on roles
    const menuItems = {
        admin: [
            { path: "/dashboard/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/dashboard/payroll", label: "Payroll", icon: <FaPaypal /> },
            { path: "/dashboard/allEmployee", label: "All-Employee-List", icon: <FaPaypal /> },
            { path: "/dashboard/contact", label: "Message", icon: <FaMessage /> },
            { path: "/dashboard/profile", label: "Profile", icon: <FaUser /> },
        ],
        Hr: [
            { path: "/dashboard/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/dashboard/manageUser", label: "Employee-List", icon: <FaEnvelope /> },
            { path: "/dashboard/progress", label: "Progress", icon: <GiProgression /> },
            { path: "/dashboard/profile", label: "Profile", icon: <FaUser /> },
        ],
        employee: [
            { path: "/dashboard/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/dashboard/worksheet", label: "WorkSheet", icon: <FaSearch /> },
            { path: "/dashboard/paymentHistory", label: "Payment-History", icon: <MdWorkHistory /> },
            { path: "/dashboard/profile", label: "Profile", icon: <FaUser /> },
        ],
    };

    // Get the menu items for the current role
    const currentMenuItems = menuItems[isAdmin] || [];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-80 min-h-screen bg-gray-300 text-gray-800 font-bold fixed top-0 left-0 h-full p-4 overflow-y-auto">
                <h1 className="text-3xl text-center font-bold p-3">Dashboard</h1>
                <ul className="menu space-y-6 text-xl">
                    {currentMenuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className="flex items-center space-x-2">
                                {item.icon} <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="flex items-center space-x-2">
                            <FaHome /> <span>Home</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-8 ml-80">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
