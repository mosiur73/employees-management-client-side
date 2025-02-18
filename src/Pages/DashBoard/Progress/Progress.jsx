import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Progress = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    const { data: employ = [], refetch } = useQuery({
        queryKey: ['employ'],
        queryFn: async () => {
            const res = await axiosSecure.get('/progress');
            return res.data;
        },
    });

    // Filtering logic
    const filteredEmployees = employ.filter((user) => {
        const matchesEmployee = selectedEmployee ? user.name === selectedEmployee : true;
        const matchesMonth = selectedMonth
            ? new Date(user.date).getMonth() + 1 === parseInt(selectedMonth, 10)
            : true;
        return matchesEmployee && matchesMonth;
    });

    // Get unique employee names
    const employeeNames = [...new Set(employ.map((user) => user.name))];

    return (
        <div>
                       <Helmet>
                            <title>Emplyee/Progress</title>
                        </Helmet>
            <h3 className="text-2xl">Progress: {filteredEmployees.length}</h3>

            {/* Filters */}
            <div className="flex gap-4 my-4 justify-center">
                <select
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="">All Employees</option>
                    {employeeNames.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="">All Months</option>
                    {[...Array(12)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                            {new Date(0, index).toLocaleString('default', { month: 'long' })}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="rounded-md bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold">
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tasks</th>
                            <th>Hours</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.tasks}</td>
                                <td>{user.hours}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Progress;
