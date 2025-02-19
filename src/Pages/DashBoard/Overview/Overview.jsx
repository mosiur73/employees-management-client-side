import React from 'react';
import { FaUsers, FaUserShield, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const Overview = () => {
    const totalUsers = 13;
    const userStats = [
        { name: 'HR', value: 5, color: '#4CAF50' },
        { name: 'Employees', value: 7, color: '#2196F3' },
        { name: 'Admin', value: 1, color: '#FFC107' },
    ];

    const performanceData = [
        { name: 'January', HR: 10, Employees: 20, Admin: 5 },
        { name: 'February', HR: 15, Employees: 25, Admin: 7 },
        { name: 'March', HR: 12, Employees: 30, Admin: 6 },
        { name: 'April', HR: 18, Employees: 35, Admin: 8 },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6 border-t-4 border-blue-500">
                    <FaUsers className="text-5xl text-blue-500" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">Total Users</p>
                        <p className="text-gray-700 text-2xl font-bold">{totalUsers}</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6 border-t-4 border-green-500">
                    <FaUserTie className="text-5xl text-green-500" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">HR</p>
                        <p className="text-gray-700 text-2xl font-bold">5</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6 border-t-4 border-indigo-500">
                    <FaBriefcase className="text-5xl text-indigo-500" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">Employees</p>
                        <p className="text-gray-700 text-2xl font-bold">7</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6 border-t-4 border-yellow-500">
                    <FaUserShield className="text-5xl text-yellow-500" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">Admin</p>
                        <p className="text-gray-700 text-2xl font-bold">1</p>
                    </div>
                </div>
            </div>
            
            {/* Pie Chart */}
            <div className="mt-12 bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">User Distribution</h3>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie data={userStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120}>
                            {userStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="mt-12 bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Monthly Performance Overview</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="HR" fill="#4CAF50" />
                        <Bar dataKey="Employees" fill="#2196F3" />
                        <Bar dataKey="Admin" fill="#FFC107" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Overview;
