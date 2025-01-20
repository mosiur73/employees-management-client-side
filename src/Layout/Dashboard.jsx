import React from 'react';
import { FaEnvelope, FaHome, FaPaypal, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { GiProgression } from 'react-icons/gi';
import { MdWorkHistory } from 'react-icons/md';
import { FaMessage } from 'react-icons/fa6';

const Dashboard = () => {
    const [isAdmin]=useAdmin()
    return (
        <div className='flex flex-col lg:flex-row pl-2 '>
            <div className='  w-80 min-h-screen bg-gray-300 text-gray-800 font-bold '>
            <h1 className='text-2xl  font-bold p-3'>Employee Management</h1>
            <ul className='menu p-4 space-y-6 text-2xl'>
                {
                    isAdmin ?
                     <>
                       <li>
                        <NavLink to="/dashboard/payroll">
                        <FaPaypal />
                            Payroll</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allEmployee">
                        <FaPaypal />
                            All-Employee-List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                        <FaMessage />
                            Message</NavLink>
                    </li>

                     </>  
                    :
                     <> 

                     <li>
                        <NavLink to="/dashboard/manageUser">
                            <FaEnvelope></FaEnvelope>
                            Employee-List</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                        <MdWorkHistory />
                            Payment-History</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/progress">
                        <GiProgression />
                            Progress</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/worksheet">
                            <FaSearch></FaSearch>
                            WorkSheet</NavLink>
                    </li>
                    </>
                }
           
          
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
            </ul>

            </div>
            <div className='flex-1 p-8 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;