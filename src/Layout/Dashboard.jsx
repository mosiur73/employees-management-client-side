import React, { useContext } from 'react';
import { FaEnvelope, FaHome, FaPaypal, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { GiProgression } from 'react-icons/gi';
import { MdWorkHistory, MdDashboard } from 'react-icons/md';
import { FaMessage } from 'react-icons/fa6';

import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {
    const {user}= useContext(AuthContext)
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
             <main className="flex-1 p-8 ml-80 bg-gray-100 min-h-screen">
    {/* Top Navigation Bar */}
    <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center mb-6">
        
        {/* Left Side: Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-1/3 border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
            <FaSearch className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent focus:outline-none"
            />
        </div>

        {/* Right Side: Welcome Message & Profile */}
        <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-lg font-medium">Welcome, <span className="text-blue-600">Admin</span></span>
            <img 
                src={user.photoURL} 
                alt="Profile" 
                className="w-12 h-12 rounded-full border-2 border-blue-400 shadow-md" 
            />
        </div>
    </div>

    {/* Main Content */}
    <Outlet />
</main>
        </div>
    );
};

export default Dashboard;
