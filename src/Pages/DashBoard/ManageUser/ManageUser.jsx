import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data;
        }
    })

    return (
        <div>
            <h2>Total User :{users.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>si</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>Bank account</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.salary}</td>
                                <td>{user.account}</td>
                                <td>
                                    <button
                                        
                                        className="btn btn-ghost btn-lg ">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;