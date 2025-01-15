import React from 'react';
import { FaEnvelope, FaHome, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin=true
    return (
        <div className='flex pl-2'>
            <div className='w-80 min-h-screen bg-gray-300 text-gray-800 font-bold '>
            <ul className='menu p-4'>
            <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/worksheet">
                            <FaSearch></FaSearch>
                            WorkSheet</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUser">
                            <FaEnvelope></FaEnvelope>
                            Manage User</NavLink>
                    </li>
            </ul>

            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;