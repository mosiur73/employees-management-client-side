import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Providers/AuthProvider';

const WorkSheet = () => {
    const [date, setDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const axiosPublic = useAxiosPublic();
    const {user}=useContext(AuthContext)

    const handleSubmit= e=>{
        e.preventDefault();
        const form = e.target;
        const tasks = form.tasks.value;
        const hours = form.hours.value;
        const formattedDate = date.toISOString().split('T')[0];
        const data = { tasks, hours, date: formattedDate,email:user?.email };
    
        axiosPublic.post(`/employee`, data)
            .then(() => {
                refetch();
                toast.success('Data submitted successfully');
            })
            .catch(() => {
                toast.error('Error submitting data');
            });
      }
    

    const { data: users = [], refetch } = useQuery({
        queryKey: ['employ'],
        queryFn: async () => {
            const res = await axiosPublic.get('/employee');
            return res.data;
        },
    });

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tasks = form.tasks.value;
        const hours = form.hours.value;
        const formattedDate = date.toISOString().split('T')[0];
        const updatedData = { tasks, hours, date: formattedDate };

        try {
            const response = await axiosPublic.put(`/employee/${selectedUser._id}`, updatedData);
            refetch();
            setModalOpen(false);
            toast.success('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Error updating user');
        }
    };

    const openModal = (user) => {
        setSelectedUser(user);
        setDate(new Date(user.date));
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUser(null);
    };
 

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
            >
                <select
                    name="tasks"
                    className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                >
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>
                <input
                    type="number"
                    name="hours"
                    placeholder="Hours Worked"
                    className="w-24 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add 
                </button>
            </form>

            <div className="overflow-x-auto mt-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tasks</th>
                            <th>Hours</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.tasks}</td>
                                <td>{user.hours}</td>
                                <td>{user.date}</td>
                                <td>
                                    <button
                                        onClick={() => openModal(user)}
                                        className="btn btn-ghost btn-md bg-green-700 text-white"
                                    >
                                        Update <FaRegEdit />
                                    </button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'Are you sure?',
                                                text: 'You will not be able to revert this!',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Yes, delete it!',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    axiosPublic.delete(`/employee/${user._id}`)
                                                        .then(() => {
                                                            refetch();
                                                            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
                                                        });
                                                }
                                            });
                                        }}
                                        className="btn btn-ghost btn-lg text-red-600"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Update User</h2>
                        <form onSubmit={handleUpdateUser} className="space-y-4">
                            <select
                                name="tasks"
                                defaultValue={selectedUser.tasks}
                                className="w-full px-4 py-2 border rounded-md"
                            >
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content">Content</option>
                                <option value="Paper-work">Paper-work</option>
                            </select>
                            <input
                                type="number"
                                name="hours"
                                defaultValue={selectedUser.hours}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkSheet;
