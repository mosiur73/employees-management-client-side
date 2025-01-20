import React from 'react';
import { FaEnvelope, FaHome, FaPaypal, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { GiProgression } from 'react-icons/gi';
import { MdWorkHistory } from 'react-icons/md';
import { FaMessage } from 'react-icons/fa6';

const Dashboard = () => {
    const [isAdmin] = useAdmin();

    // Define menu items based on roles
    const menuItems = {
        admin: [
            { path: "/dashboard/payroll", label: "Payroll", icon: <FaPaypal /> },
            { path: "/dashboard/allEmployee", label: "All-Employee-List", icon: <FaPaypal /> },
            { path: "/dashboard/contact", label: "Message", icon: <FaMessage /> },
        ],
        Hr: [
            { path: "/dashboard/manageUser", label: "Employee-List", icon: <FaEnvelope /> },
            { path: "/dashboard/progress", label: "Progress", icon: <GiProgression /> },
        ],
        employee: [
            { path: "/dashboard/worksheet", label: "WorkSheet", icon: <FaSearch /> },
            { path: "/dashboard/paymentHistory", label: "Payment-History", icon: <MdWorkHistory /> },
        ],
    };

    // Get the menu items for the current role
    const currentMenuItems = menuItems[isAdmin] || [];

    // Define dashboard content based on roles
    const dashboardContent = {
        admin: <div><Outlet /></div>,
        Hr: <div><Outlet /></div>,
        employee: <div><Outlet /></div>,
    };

    return (
        <div className="flex flex-col lg:flex-row pl-2">
            {/* Sidebar */}
            <div className="w-80 min-h-screen bg-gray-300 text-gray-800 font-bold">
                <h1 className="text-3xl text-center font-bold p-3">Dashboard</h1>
                <ul className="menu p-4 space-y-6 text-2xl">
                    {currentMenuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path}>
                                {item.icon} {item.label}
                            </NavLink>
                        </li>
                    ))}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-8">
                {dashboardContent[isAdmin] || <Outlet />}
            </div>
        </div>
    );
};

export default Dashboard;
